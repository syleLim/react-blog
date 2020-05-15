import React from "react"
import PropTypes			from "prop-types"
import ImmutablePropTypes	from "react-immutable-proptypes"
import { List, Record }		from "immutable"
import { HomeStyle }		from "../../styles"
import Header 				from "./Header"
import HomePreview			from "./HomePreview"


const HomeComponent = ({blogTitle, blogDescription, previewItems}) => {
	return (
		<HomeStyle>
			<Header
				blogTitle={blogTitle}
				blogDescription={blogDescription}
				/>
			<HomePreview 
				previewItems={previewItems}
				/>
		</HomeStyle>
	)
}

HomeComponent.propTypes = {
	blogTitle		: PropTypes.string,
	blogDescription	: PropTypes.string,
	previewItems	: ImmutablePropTypes.listOf(
		ImmutablePropTypes.recordOf({
			title		: PropTypes.string,
			author		: PropTypes.string,
			date		: PropTypes.string,
			content		: PropTypes.string
		})
	)
};

HomeComponent.defaultProps = {
	blogTitle		: "no title",
	blogDescription	: "no description",
	previewItems	: List([
		Record({
			titile	: "no item",
			author	: "no author",
			date	: "no date",
			content	: "no content"
		})()
	])
};

export default HomeComponent;