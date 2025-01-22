declare module 'react-glitch-effect/core/GlitchText' {
  interface GlitchTextProps {
    children: React.ReactNode;
    color1?: string;
    color2?: string;
    disabled?: boolean;
    onHover?: boolean;
    duration?: number;
    iterationCount?: number;
    baseColor?: string;
  }
  
  const GlitchText: React.FC<GlitchTextProps>;
  export default GlitchText;
} 