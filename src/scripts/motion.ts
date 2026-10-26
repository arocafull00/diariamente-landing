import { animate, hover, inView, press, scroll, spring, stagger } from "motion";

type Keyframes = Record<string, (number | string)[]>;

const root = document.documentElement;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const settle = { type: spring, bounce: 0.2, visualDuration: 0.7 } as const;
const snappy = { type: spring, stiffness: 320, damping: 22 } as const;
const viewMargin = "0px 0px -12% 0px";

const variants: Record<string, Keyframes> = {
  up: { opacity: [0, 1], y: [48, 0] },
  left: { opacity: [0, 1], x: [-56, 0] },
  right: { opacity: [0, 1], x: [56, 0] },
  scale: { opacity: [0, 1], scale: [0.9, 1], y: [32, 0] },
};

const all = (selector: string, scope: ParentNode = document) => Array.from(scope.querySelectorAll<HTMLElement>(selector));

const delayOf = (el: HTMLElement) => (parseFloat(el.style.getPropertyValue("--delay")) || 0) / 1000;

const splitWords = (el: HTMLElement) => {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  for (const node of nodes) {
    const fragment = document.createDocumentFragment();
    for (const part of node.data.split(/(\s+)/)) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        fragment.append(part);
        continue;
      }
      const word = document.createElement("span");
      word.className = "word";
      word.textContent = part;
      fragment.append(word);
    }
    node.replaceWith(fragment);
  }
  el.classList.add("is-split");
  return all(".word", el);
};

const reveals = () => {
  for (const el of all("[data-reveal]")) {
    const keyframes = variants[el.dataset.reveal || "up"] ?? variants.up;
    inView(el, () => void animate(el, keyframes, { ...settle, delay: delayOf(el) }), { margin: viewMargin });
  }

  for (const el of all("[data-split]")) {
    const words = splitWords(el);
    inView(
      el,
      () =>
        void animate(
          words,
          { opacity: [0, 1], y: ["0.45em", "0em"], rotate: [4, 0], filter: ["blur(6px)", "blur(0px)"] },
          { ...settle, delay: stagger(0.055, { startDelay: delayOf(el) }) },
        ),
      { margin: viewMargin },
    );
  }

  for (const el of all("[data-stagger]")) {
    const children = Array.from(el.children) as HTMLElement[];
    inView(
      el,
      () => void animate(children, { opacity: [0, 1], y: [28, 0] }, { ...settle, delay: stagger(0.08, { startDelay: delayOf(el) }) }),
      { margin: viewMargin },
    );
  }

  for (const el of all("[data-bar]")) {
    inView(el, () => void animate(el, { scaleX: [0, 1] }, { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: delayOf(el) + 0.4 }));
  }

  const pops = all("[data-pop]");
  if (pops.length) {
    inView(pops[0], () => void animate(pops, { opacity: [0, 1], scale: [0.4, 1] }, { type: spring, bounce: 0.55, visualDuration: 0.5, delay: stagger(0.12, { startDelay: 0.9 }) }));
  }

  const animoGroups = new Map<HTMLElement, HTMLElement[]>();
  for (const el of all("[data-animo]")) {
    const group = el.closest<HTMLElement>("section, footer, main") ?? document.body;
    animoGroups.set(group, [...(animoGroups.get(group) ?? []), el]);
  }
  for (const [group, animos] of animoGroups) {
    const pop = () =>
      void animate(
        animos,
        { opacity: [0, 1], scale: [0.2, 1], rotate: [-25, 0] },
        { type: spring, bounce: 0.6, visualDuration: 0.6, delay: stagger(0.09, { startDelay: group.matches("[data-hero]") ? 0.35 : 0.1, from: "center" }) },
      );
    if (group.matches("[data-hero]")) pop();
    else inView(group, pop, { amount: 0.15 });
  }

  for (const el of all("[data-draw]")) {
    inView(el, () => void animate(el, { scaleX: [0, 1] }, { duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: delayOf(el) }), { margin: viewMargin });
  }

  const format = new Intl.NumberFormat("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  for (const el of all("[data-count]")) {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix ?? "";
    inView(
      el,
      () =>
        void animate(0, target, {
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (value) => (el.textContent = `${format.format(value)}${suffix}`),
        }),
      { amount: 0.8 },
    );
  }
};

const scrollEffects = () => {
  for (const el of all("[data-parallax]")) {
    const distance = Number(el.dataset.parallax) * 100;
    scroll(animate(el, { y: [-distance, distance] }, { ease: "linear" }), { target: el, offset: ["start end", "end start"] });
  }

  const progress = document.querySelector<HTMLElement>("[data-progress]");
  if (progress) scroll(animate(progress, { scaleX: [0, 1] }, { ease: "linear" }));

  const hero = document.querySelector<HTMLElement>("[data-hero]");
  const heroCopy = document.querySelector<HTMLElement>("[data-hero-copy]");
  const heroStage = document.querySelector<HTMLElement>("[data-hero-stage]");
  if (hero && heroCopy) {
    scroll(animate(heroCopy, { y: [0, -140], opacity: [1, 0], scale: [1, 0.96] }, { ease: "linear" }), {
      target: hero,
      offset: ["start start", "end start"],
    });
  }
  if (hero && heroStage) {
    scroll(
      animate(heroStage, { rotateX: [16, 0, 0], scale: [0.94, 1, 1.02] }, { ease: "linear", times: [0, 0.45, 1] }),
      { target: hero, offset: ["start start", "end start"] },
    );
  }

  for (const el of all("[data-scale-in]")) {
    scroll(animate(el, { scale: [0.93, 1] }, { ease: "linear" }), { target: el, offset: ["start end", "start 35%"] });
  }

  const ribbon = document.querySelector<HTMLElement>("[data-ribbon]");
  const ribbonImage = document.querySelector<HTMLElement>("[data-ribbon-image]");
  if (ribbon && ribbonImage) {
    scroll(animate(ribbon, { scale: [0.86, 1], borderRadius: ["6rem", "3rem"] }, { ease: "linear" }), {
      target: ribbon,
      offset: ["start end", "center center"],
    });
    scroll(animate(ribbonImage, { y: ["-8%", "8%"], scale: [1.25, 1.2] }, { ease: "linear" }), {
      target: ribbon,
      offset: ["start end", "end start"],
    });
  }

  const header = document.querySelector<HTMLElement>("[data-header]");
  if (header) {
    let lastY = window.scrollY;
    let hidden = false;
    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;
        const busy = header.contains(document.activeElement) || header.querySelector("[aria-expanded='true']");
        const shouldHide = !busy && y > lastY && y > 240;
        if (Math.abs(y - lastY) > 6 && shouldHide !== hidden) {
          hidden = shouldHide;
          animate(header, { y: hidden ? "-130%" : "0%" }, { type: spring, bounce: 0.15, visualDuration: 0.45 });
        }
        lastY = y;
      },
      { passive: true },
    );
  }
};

const tilt = (el: HTMLElement, strength: number) => {
  el.addEventListener("pointermove", (event) => {
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    animate(el, { rotateY: px * strength, rotateX: -py * strength, transformPerspective: 1000 }, snappy);
  });
  el.addEventListener("pointerleave", () => void animate(el, { rotateY: 0, rotateX: 0 }, { type: spring, bounce: 0.4, visualDuration: 0.6 }));
};

const spotlight = (el: HTMLElement) => {
  el.addEventListener("pointermove", (event) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  });
};

const microInteractions = () => {
  for (const el of all(".btn")) {
    press(el, () => {
      animate(el, { scale: 0.97 }, { type: spring, stiffness: 600, damping: 25 });
      return () => void animate(el, { scale: 1 }, { type: spring, bounce: 0.5, visualDuration: 0.35 });
    });
    if (finePointer) spotlight(el);
  }

  if (finePointer) for (const el of all("[data-tilt]")) tilt(el, Number(el.dataset.tilt) || 8);

  for (const el of all(".animo-body")) {
    hover(el, () => {
      animate(el, { scale: [1, 1.18, 1.1], rotate: [0, -10, 6, 0] }, { duration: 0.5, ease: "easeOut" });
      return () => void animate(el, { scale: 1 }, { type: spring, bounce: 0.6, visualDuration: 0.4 });
    });
  }

  for (const field of finePointer ? all("[data-animo-field]") : []) {
    const bodies = all(".animo-body", field);
    field.addEventListener("pointermove", (event) => {
      for (const el of bodies) {
        const rect = el.getBoundingClientRect();
        const dx = rect.left + rect.width / 2 - event.clientX;
        const dy = rect.top + rect.height / 2 - event.clientY;
        const distance = Math.hypot(dx, dy);
        const push = Math.max(0, 1 - distance / 260) * 36;
        animate(el, { x: (dx / (distance || 1)) * push, y: (dy / (distance || 1)) * push }, snappy);
      }
    });
    field.addEventListener("pointerleave", () => {
      for (const el of bodies) animate(el, { x: 0, y: 0 }, { type: spring, bounce: 0.5, visualDuration: 0.6 });
    });
  }

  for (const el of all("[data-lift]")) {
    hover(el, () => {
      animate(el, { y: -6, scale: 1.02 }, snappy);
      return () => void animate(el, { y: 0, scale: 1 }, snappy);
    });
  }

  for (const el of all("[data-nudge]")) {
    hover(el, () => {
      animate(el, { x: 6 }, snappy);
      return () => void animate(el, { x: 0 }, snappy);
    });
  }

  for (const el of all("[data-wiggle]")) {
    const target = el.querySelector<HTMLElement>("[data-wiggle-target]") ?? el;
    hover(el, () => void animate(target, { rotate: [0, -14, 10, -6, 0] }, { duration: 0.6, ease: "easeInOut" }));
  }

  for (const el of all("[data-fan]")) {
    const [back, middle] = Array.from(el.children) as HTMLElement[];
    hover(el, () => {
      animate(back, { y: -18, rotate: -5 }, snappy);
      animate(middle, { y: -9, rotate: 3 }, snappy);
      return () => {
        animate(back, { y: 0, rotate: 0 }, snappy);
        animate(middle, { y: 0, rotate: 0 }, snappy);
      };
    });
  }
};

if (root.classList.contains("motion")) {
  root.dataset.motionReady = "";
  reveals();
  scrollEffects();
  microInteractions();
}
