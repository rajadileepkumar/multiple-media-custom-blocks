import { __ } from '@wordpress/i18n';
import {
	registerBlockType,
} from '@wordpress/blocks';
import {
	RichText,
	MediaUpload,
	InnerBlocks
} from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

registerBlockType( 'media-card/media-card-three-column-esnext', {
	title: __( 'Media Card Three Columns', 'gutenberg-examples' ),
	description: __( 'Welcome to the wonderful world of blocks! Blocks are the basis of all content within the editor.There are blocks available for all kinds of content: insert text, headings, images, lists, videos, tables, and lots more.Browse through the library to learn more about what each block does.', 'gutenberg-examples' ),
	icon: 'index-card',
	category: 'layout',
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2',
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		ingredients: {
			type: 'array',
			source: 'children',
			selector: '.ingredients',
		},
		instructions: {
			type: 'array',
			source: 'children',
			selector: '.steps',
		},
	},
	example: {
		attributes: {
			title: __( 'Chocolate Chip Cookies', 'gutenberg-examples' ),
			mediaURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg',
			ingredients: [
				__( 'flour', 'gutenberg-examples' ),
				__( 'sugar', 'gutenberg-examples' ),
				__( 'chocolate', 'gutenberg-examples' ),
				'💖',
			],
			instructions: [
				__( 'Mix', 'gutenberg-examples' ),
				__( 'Bake', 'gutenberg-examples' ),
				__( 'Enjoy', 'gutenberg-examples' ),
			],
		},
	},
	edit: ( props ) => {
		const {
			className,
			attributes: {},
			setAttributes,
		} = props;
		const TEMPLATE = [ [ 'core/columns', {}, [
			[ 'core/column', {}, [
				['core/image'],
				[ 'core/heading', { placeholder: 'Heading Here' } ],
				[ 'core/paragraph', { placeholder: 'Enter Paragraph' } ],
				[ 'core/button', { placeholder: 'Button' } ],
			] ],
			[ 'core/column', {}, [
				['core/image'],
				[ 'core/heading', { placeholder: 'Heading Here' } ],
				[ 'core/paragraph', { placeholder: 'Enter Paragraph' } ],
				[ 'core/button', { placeholder: 'Button' } ],
			] ],
			[ 'core/column', {}, [
				['core/image'],
				[ 'core/heading', { placeholder: 'Heading Here' } ],
				[ 'core/paragraph', { placeholder: 'Enter Paragraph' } ],
				[ 'core/button', { placeholder: 'Button' } ],
			] ],
		] ] ];

		return (
			<div className={ className }>
				<div className={ className }>
					<h2>Media Card Three Columns</h2>
					<InnerBlocks template={TEMPLATE} />
				</div>
			</div>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: {},
		} = props;
		return (
			<div className={ className }>
				<div className="media-block-left">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
} );