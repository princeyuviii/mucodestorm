/**
 * Utility function to concatenate classNames.
 * @param args - Class names to concatenate.
 * @returns Concatenated class names.
 */
export const cn = (...args: (string | undefined)[]) => {
  return args.filter(Boolean).join(" ")
}

