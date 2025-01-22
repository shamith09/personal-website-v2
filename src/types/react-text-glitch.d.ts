declare module "react-text-glitch" {
  interface TextGlitchProps {
    text: string;
    duration?: number;
    component?: string;
  }

  const TextGlitch: React.FC<TextGlitchProps>;
  export default TextGlitch;
}
