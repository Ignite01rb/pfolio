import { useMotionValue } from "framer-motion";

export default function useMagnetic() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function handleMouseMove(e) {
    const rect = e.target.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { x, y, handleMouseMove, handleMouseLeave };
}
