import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<div className="back2top-selector">{attributes.selector}</div>
			<div className="back2top-link">{attributes.linkOne}</div>
			<div className="back2top-link-two">{attributes.linkTwo}</div>
			<div className="back2top-link-three">{attributes.linkThree}</div>
			<div className="back2top-opacity">{attributes.opacity}</div>
			<div className="back2top-opacity-two">{attributes.opacityTwo}</div>
			<div className="back2top-opacity-three">{attributes.opacityThree}</div>
			<div className="back2top-height">{attributes.height}</div>
			<div className="back2top-height-two">{attributes.heightTwo}</div>
			<div className="back2top-height-three">{attributes.heightThree}</div>
			<div className="back2top-width">{attributes.width}</div>
			<div className="back2top-width-two">{attributes.widthTwo}</div>
			<div className="back2top-width-three">{attributes.widthThree}</div>
			<div className="back2top-color">{attributes.color}</div>
			<div className="back2top-color-two">{attributes.colorTwo}</div>
			<div className="back2top-color-three">{attributes.colorThree}</div>
			<div className="back2top-border">
				<div>borderWidth: {attributes.border.width}</div>
				<div>borderColor: {attributes.border.color}</div>
				<div>borderStyle: {attributes.border.style}</div>
				<div>borderRadius top: {attributes.borderRadius.top}</div>
			</div>
			<div className="back2top-border-two">
				<div>borderWidth: {attributes.borderTwo.width}</div>
				<div>borderColor: {attributes.borderTwo.color}</div>
				<div>borderStyle: {attributes.borderTwo.style}</div>
				<div>borderRadius top: {attributes.borderRadiusTwo.top}</div>
			</div>
			<div className="back2top-border-three">
				<div>borderWidth: {attributes.borderThree.width}</div>
				<div>borderColor: {attributes.borderThree.color}</div>
				<div>borderStyle: {attributes.borderThree.style}</div>
				<div>borderRadius top: {attributes.borderRadiusThree.top}</div>
			</div>
		</div>
	);
}
