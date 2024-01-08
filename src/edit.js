import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import { useEffect } from "react";
import {
  TextControl,
  ColorPicker,
  RangeControl,
  __experimentalBorderControl as BorderControl,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const [values, setValues] = useState({
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
  });

  const colors = [
    { name: "Blue 20", color: "#72aee6" },
    // ...
  ];

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const layerOne = {
    display: "flex",
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

  console.log("attributes.border", attributes.border);

  return (
    <div {...useBlockProps()}>
      <flex className="back2top-container">
        <flex className="fancy-buttons-top-row">
          <flex className="outer-layer-container">
            <flex className="inner-layer-container">
              <flex>
                <RangeControl
                  label={__("Opacity 1", "fancy buttons")}
                  onChange={(val) => setAttributes({ opacity: val })}
                  initialPosition={Number(attributes.opacity)}
                  max={1}
                  withInputField={false}
                  step={0.1}
                  marks={{}}
                  railColor="yellowgreen"
                />
              </flex>
              <flex>
                <RangeControl
                  label={__("Height", "fancy buttons")}
                  onChange={(val) => setAttributes({ height: val })}
                  initialPosition={Number(attributes.height)}
                  max={300}
                  withInputField={false}
                  marks={{}}
                  step={10}
                  railColor="yellowgreen"
                />
              </flex>
              <flex>
                <RangeControl
                  label={__("Width", "fancy buttons")}
                  onChange={(val) => setAttributes({ width: val })}
                  initialPosition={Number(attributes.width)}
                  value={attributes.width}
                  max={300}
                  withInputField={false}
                  marks={{}}
                  step={10}
                  railColor="yellowgreen"
                />
              </flex>
              <flex className="border-flex">
                <BorderControl
                  className="first-border"
                  label={__("Border", "fancy buttons")}
                  onChange={(val) => setAttributes({ border: val })}
                  value={attributes.border}
                  withSlider
                />
              </flex>
              <flex className="hello">
                <BoxControl
                  className="border-radius-component"
                  label={__("Border Radius", "fancy buttons")}
                  values={attributes.borderRadius}
                  onChange={(val) => setAttributes({ borderRadius: val })}
                />
              </flex>
            </flex>
            <flex className="colorModule">
              <ColorPicker
                className="colorPicker"
                label={__("Background Color", "fancy buttons")}
                color={attributes.color}
                onChange={(val) => setAttributes({ color: val })}
                value={attributes.color}
                defaultValue="#000"
              />
            </flex>
          </flex>
          <flex className="outer-layer-container">
            <flex className="inner-layer-container">
              <flex>
                <RangeControl
                  label={__("Opacity 2", "fancy buttons")}
                  onChange={(val) => setAttributes({ opacityTwo: val })}
                  initialPosition={Number(attributes.opacityTwo)}
                  max={1}
                  withInputField={false}
                  step={0.1}
                  marks={{}}
                  railColor="yellowgreen"
                />
              </flex>
              <flex>
                <RangeControl
                  label={__("Height", "fancy buttons")}
                  onChange={(val) => setAttributes({ heightTwo: val })}
                  initialPosition={Number(attributes.heightTwo)}
                  max={300}
                  withInputField={false}
                  marks={{}}
                  step={10}
                  railColor="yellowgreen"
                />
              </flex>
              <flex>
                <RangeControl
                  label={__("Width", "fancy buttons")}
                  onChange={(val) => setAttributes({ widthTwo: val })}
                  initialPosition={Number(attributes.widthTwo)}
                  value={attributes.widthTwo}
                  max={300}
                  withInputField={false}
                  marks={{}}
                  step={10}
                  railColor="yellowgreen"
                />
              </flex>
              <flex className="border-flex">
                <BorderControl
                  className="first-border"
                  label={__("Border", "fancy buttons")}
                  onChange={(val) => setAttributes({ borderTwo: val })}
                  value={attributes.borderTwo}
                  withSlider
                />
              </flex>
              <flex className="hello">
                <BoxControl
                  className="border-radius-component"
                  label={__("Border Radius", "fancy buttons")}
                  values={attributes.borderRadiusTwo}
                  onChange={(val) => setAttributes({ borderRadiusTwo: val })}
                />
              </flex>
            </flex>
            <flex className="colorModule">
              <ColorPicker
                className="colorPicker"
                label={__("Background Color", "fancy buttons")}
                color={attributes.colorTwo}
                onChange={(val) => setAttributes({ colorTwo: val })}
                value={attributes.colorTwo}
                defaultValue="#000"
              />
            </flex>
          </flex>
          <flex className="outer-layer-container">
            <flex className="inner-layer-container">
              <flex>
                <RangeControl
                  label={__("Opacity 3", "fancy buttons")}
                  onChange={(val) => setAttributes({ opacityThree: val })}
                  initialPosition={Number(attributes.opacityThree)}
                  max={1}
                  withInputField={false}
                  step={0.1}
                  marks={{}}
                  railColor="yellowgreen"
                />
              </flex>
              <flex>
                <RangeControl
                  label={__("Height", "fancy buttons")}
                  onChange={(val) => setAttributes({ heightThree: val })}
                  initialPosition={Number(attributes.heightThree)}
                  max={300}
                  withInputField={false}
                  marks={{}}
                  step={10}
                  railColor="yellowgreen"
                />
              </flex>
              <flex>
                <RangeControl
                  label={__("Width", "fancy buttons")}
                  onChange={(val) => setAttributes({ widthThree: val })}
                  initialPosition={Number(attributes.widthThree)}
                  value={attributes.widthThree}
                  max={300}
                  withInputField={false}
                  marks={{}}
                  step={10}
                  railColor="yellowgreen"
                />
              </flex>
              <flex className="border-flex">
                <BorderControl
                  className="first-border"
                  label={__("Border", "fancy buttons")}
                  onChange={(val) => setAttributes({ borderThree: val })}
                  value={attributes.borderThree}
                  withSlider
                />
              </flex>
              <flex className="hello">
                <BoxControl
                  className="border-radius-component"
                  label={__("Border Radius", "fancy buttons")}
                  values={attributes.borderRadiusThree}
                  onChange={(val) => setAttributes({ borderRadiusThree: val })}
                />
              </flex>
            </flex>
            <flex className="colorModule">
              <ColorPicker
                className="colorPicker"
                label={__("Background Color", "fancy buttons")}
                color={attributes.colorThree}
                onChange={(val) => setAttributes({ colorThree: val })}
                value={attributes.colorThree}
                defaultValue="#000"
              />
            </flex>
          </flex>

          <flex className="outer-layer-container">
            <flex className="button-prototype-container">
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

          <flex className="outer-layer-container">
            <flex className="inner-layer-container">
              <flex>
                <RangeControl
                  label={__("Icon Opacity", "fancy buttons")}
                  onChange={(val) => setAttributes({ iconOpacity: val })}
                  initialPosition={Number(attributes.iconOpacity)}
                  max={1}
                  withInputField={false}
                  step={0.1}
                  marks={{}}
                  railColor="yellowgreen"
                />
              </flex>
              <flex>
                <RangeControl
                  label={__("Icon Size", "fancy buttons")}
                  onChange={(val) => setAttributes({ iconSize: val })}
                  initialPosition={Number(attributes.iconSize)}
                  max={300}
                  withInputField={false}
                  marks={{}}
                  step={10}
                  railColor="yellowgreen"
                />
              </flex>
              <flex className="border-flex">
                <BorderControl
                  className="first-border"
                  label={__("Border", "fancy buttons")}
                  onChange={(val) => setAttributes({ iconBorder: val })}
                  value={attributes.iconBorder}
                  withSlider
                />
              </flex>
              <flex>
                <BoxControl
                  label={__("Border Radius", "fancy buttons")}
                  values={attributes.borderRadiusThree}
                  onChange={(val) => setAttributes({ iconBorderRadius: val })}
                />
              </flex>
            </flex>
            <flex className="colorModule">
              <ColorPicker
                className="colorPicker"
                label={__("Background Color", "fancy buttons")}
                color={attributes.iconColor}
                onChange={(val) => setAttributes({ iconColor: val })}
                value={attributes.iconColor}
                defaultValue="#000"
              />
            </flex>
          </flex>

          <flex className="outer-layer-container">
            <flex className="inner-layer-container">
              <Tabs>
                <TabList>
                  <Tab>Tab One</Tab>
                  <Tab>Tab Two</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <TextControl
                      label={__("Selector", "fancy buttons")}
                      className="selector-boxes"
                      autoComplete="off"
                      help="Choose a class or id to add to the container for further edits."
                      value={attributes.selector}
                      onChange={(val) => setAttributes({ selector: val })}
                    />
                    <TextControl
                      label={__("Link 1", "fancy buttons")}
                      className="selector-boxes"
                      autoComplete="off"
                      help="Provide a link to the image that you want to use as a background."
                      value={attributes.linkOne}
                      onChange={(val) => setAttributes({ linkOne: val })}
                    />
                    <TextControl
                      label={__("Link 2", "fancy buttons")}
                      className="selector-boxes"
                      autoComplete="off"
                      help="Provide a link to the image that you want to use as a background."
                      value={attributes.linkTwo}
                      onChange={(val) => setAttributes({ linkTwo: val })}
                    />
                  </TabPanel>
                  <TabPanel>
                    <TextControl
                      label={__("Link 3", "fancy buttons")}
                      className="selector-boxes"
                      autoComplete="off"
                      help="Provide a link to the image that you want to use as a background."
                      value={attributes.linkThree}
                      onChange={(val) => setAttributes({ linkThree: val })}
                    />
                    <TextControl
                      label={__("Icon", "fancy buttons")}
                      className="selector-boxes"
                      autoComplete="off"
                      help="Choose an icon at https://fonts.google.com/icons. Enter 'cloud' if you want to use the cloud icon."
                      value={attributes.icon}
                      onChange={(val) => setAttributes({ icon: val })}
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </flex>
          </flex>
        </flex>
      </flex>
    </div>
  );
}
