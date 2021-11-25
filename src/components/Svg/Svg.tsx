import React from 'react'

interface SvgProps {
    icon: any,
    size: number,
    svgClassName?: string,
}

const Svg: React.FC<SvgProps> = ({
   icon,
   size,
   svgClassName,
}) => {
    return (
        <svg
            className={svgClassName}
            dangerouslySetInnerHTML={{ // @ts-ignore
                __html: icon.markup,
            }}
            style={{
                minWidth: `${size}rem`,
                maxWidth: `${size}rem`,
                width: `${size}rem`,
                minHeight: `${size}rem`,
                maxHeight: `${size}rem`,
                height: `${size}rem`,
            }}
            viewBox={icon.viewBox}
        />
    )
}

export default Svg