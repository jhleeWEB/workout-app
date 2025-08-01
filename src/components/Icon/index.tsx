import dynamic from 'next/dynamic';

type IconProps = {
	icon: keyof typeof ICON_MAP;
	size?: number;
} & React.SVGAttributes<SVGAElement>;

const ICON_MAP = {
	Calendar: () => import('@/assets/icons/calendar.svg'),
	Home: () => import('@/assets/icons/home.svg'),
	Shop: () => import('@/assets/icons/shop.svg'),
	File: () => import('@/assets/icons/file.svg'),
	Star: () => import('@/assets/icons/star.svg'),
	StarSolid: () => import('@/assets/icons/star-solid.svg'),
	Eye: () => import('@/assets/icons/eye.svg'),
	Bookmark: () => import('@/assets/icons/bookmark.svg'),
	Back: () => import('@/assets/icons/back.svg'),
	Forward: () => import('@/assets/icons/forward.svg'),
	NumberList: () => import('@/assets/icons/numberList.svg'),
	VerticalEllipsis: () => import('@/assets/icons/verticalEllipsis.svg'),
};

export default function Icon({ icon, ...props }: IconProps) {
	const { size = 12, height, width, fill = 'currentColor' } = props;
	const IconComponent = dynamic<React.SVGAttributes<SVGAElement>>(
		ICON_MAP[icon],
		{
			loading: () => <div>loading</div>,
		}
	);
	return (
		<IconComponent
			height={size || height}
			width={size || width}
			{...props}
			fill={fill}
		/>
	);
}
