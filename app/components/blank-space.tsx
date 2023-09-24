type BlankSpaceProps = {
  size: number,
  color: string
}

export default function BlankSpace({ size, color = "#FFF"}: BlankSpaceProps) {
  return (
    <div style={{ height: `${size}px`, backgroundColor: color }}></div>  
  )
}