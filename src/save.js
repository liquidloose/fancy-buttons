import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const blockProps = useBlockProps.save();

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "2%",
    position: "fixed",
    bottom: "9vh",
    right: "2vw",
    zIndex: `5000`,
  };

  const layerOne = {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: Number(attributes.height),
    width: Number(attributes.width),
    background: attributes.color,
    backgroundImage: `url(${attributes.linkOne})`,
    opacity: attributes.opacity,
    borderTopLeftRadius: attributes.borderRadius.top,
    borderTopRightRadius: attributes.borderRadius.right,
    borderBottomRightRadius: attributes.borderRadius.bottom,
    borderBottomLeftRadius: attributes.borderRadius.left,
    borderColor: attributes.border.color,
    borderStyle: attributes.border.style,
    borderWidth: attributes.border.width,
  };

  const layerTwo = {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: Number(attributes.heightTwo),
    width: Number(attributes.widthTwo),
    background: attributes.colorTwo,
    backgroundImage: `url(${attributes.linkTwo})`,
    opacity: attributes.opacityTwo,
    borderTopLeftRadius: attributes.borderRadiusTwo.top,
    borderTopRightRadius: attributes.borderRadiusTwo.right,
    borderBottomRightRadius: attributes.borderRadiusTwo.bottom,
    borderBottomLeftRadius: attributes.borderRadiusTwo.left,
    borderColor: attributes.borderTwo.color,
    borderStyle: attributes.borderTwo.style,
    borderWidth: attributes.borderTwo.width,
  };

  const layerThree = {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: Number(attributes.heightThree),
    width: Number(attributes.widthThree),
    background: attributes.colorThree,
    backgroundImage: `url(${attributes.linkThree})`,
    opacity: attributes.opacityThree,
    borderTopLeftRadius: attributes.borderRadiusThree.top,
    borderTopRightRadius: attributes.borderRadiusThree.right,
    borderBottomRightRadius: attributes.borderRadiusThree.bottom,
    borderBottomLeftRadius: attributes.borderRadiusThree.left,
    borderColor: attributes.borderThree.color,
    borderStyle: attributes.borderThree.style,
    borderWidth: attributes.borderThree.width,
  };

  const iconStyle = {
    zIndex: "3000",
    position: "absolute",
    position: "relative",
    fontSize: attributes.iconSize + "px",
    color: attributes.iconColor,
    opacity: attributes.iconOpacity,
    borderTopLeftRadius: attributes.iconBorderRadius.top,
    borderTopRightRadius: attributes.iconBorderRadius.right,
    borderBottomRightRadius: attributes.iconBorderRadius.bottom,
    borderBottomLeftRadius: attributes.iconBorderRadius.left,
    borderColor: attributes.iconBorder.color,
    borderStyle: attributes.iconBorder.style,
    borderWidth: attributes.iconBorder.width,
  };

  return (
    <div {...blockProps}>
      <div
        className="back2top-data-attributes"
        data-color={attributes.color}
        data-height={attributes.height}
        data-width={attributes.width}
        data-opacity={attributes.opacity}
        data-color-two={attributes.colorTwo}
        data-height-two={attributes.heightTwo}
        data-width-two={attributes.widthTwo}
        data-opacity-two={attributes.opacityTwo}
        data-color-three={attributes.colorThree}
        data-height-three={attributes.heightThree}
        data-width-three={attributes.widthThree}
        data-opacity-three={attributes.opacityThree}
        data-selector={attributes.selector}
        data-link-one={attributes.linkOne}
        data-link-two={attributes.linkTwo}
        data-link-three={attributes.linkThree}
        data-icon={attributes.icon}
        data-icon-opacity={attributes.iconOpacity}
        data-icon-size={attributes.iconSize}
        data-icon-color={attributes.iconColor}
        data-border-info={`{border-color: ${attributes.border.color},
         border-style: ${attributes.border.style},
         border-width: ${attributes.border.width}}`}
        data-border-radius-info={`{border-radius: ${attributes.borderRadius.top}
          ${attributes.borderRadius.right}
          ${attributes.borderRadius.bottom}
          ${attributes.borderRadius.left}}`}
        data-border-two-info={`{border-color: ${attributes.borderTwo.color},
          border-width: ${attributes.borderTwo.width},
          border-style: ${attributes.borderTwo.style}}`}
        data-border-radius-two={`{border-radius: ${attributes.borderRadiusTwo.top}
          ${attributes.borderRadiusTwo.right}
          ${attributes.borderRadiusTwo.bottom}
          ${attributes.borderRadiusTwo.left}}`}
        data-border-three-info={`{border-color: ${attributes.borderThree.color},
          border-width: ${attributes.borderThree.width},
          border-style: ${attributes.borderThree.style}}`}
        data-border-radius-three={`{border-radius: ${attributes.borderRadiusThree.top}
          ${attributes.borderRadiusThree.right}
          ${attributes.borderRadiusThree.bottom}
          ${attributes.borderRadiusThree.left}}`}
        data-icon-border-info={`{border-color: ${attributes.iconBorder.color},
          border-width: ${attributes.iconBorder.width},
          border-style: ${attributes.iconBorder.style}}`}
        data-icon-border-radius={`{border-radius: ${attributes.iconBorderRadius.top}
          ${attributes.iconBorderRadius.right}
          ${attributes.iconBorderRadius.bottom}
          ${attributes.iconBorderRadius.left}}`}
      ></div>

      <div className=" back2top-icon-border-radius" style={{ display: "none" }}>
        <div>borderWidth: {attributes.iconBorder.width}</div>
        <div>borderColor: {attributes.iconBorder.color}</div>
        <div>borderStyle: {attributes.iconBorder.style}</div>
        <div>borderRadius top: {attributes.iconBorderRadius.top}</div>
      </div>

      <flex className="outer-layer-container">
        <flex className="button-prototype-container" style={containerStyle}>
          <flex className="layer" id="layerOne" style={layerOne}></flex>
          <flex className="layer" id="layerTwo" style={layerTwo}></flex>
          <flex className="layer" id="layerThree" style={layerThree}></flex>
          <flex className="layer">
            <i className="material-icons" style={iconStyle}>
              {attributes.icon}
              {console.log("iconStyle: ", iconStyle)}
            </i>
          </flex>
        </flex>
      </flex>
    </div>
  );
}
