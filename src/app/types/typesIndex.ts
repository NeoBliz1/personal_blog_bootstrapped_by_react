import React, { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';
import { POSTS_DATA } from '../blog/postsData';

export interface StateContextType {
	imgsRendered: boolean;
	imgsRenderedSetState: () => void;
	spinnerIsShowing: boolean;
	spinnerIsShowingSetState: () => void;
	childRootIsShowing: boolean;
	childRootIsShowingSetState: () => void;
	pageTitle: string;
	setPageTitle: Dispatch<SetStateAction<string>>;
}

export interface PostLayoutProps {
	pageTitle: string;
	fetchUrl: string;
	imgModule?: ReactNode;
	lang: string;
	children: ReactNode;
}

export interface CustomModalProps {
	codeBlock: string;
	refCodeBlockModal: RefObject<HTMLElement>;
	lang: string;
}

export interface PostConfig {
	id: string;
	path: string;
	title: string;
	description: string;
	imgSrc: string;
	altText: string;
	layoutClasses?: string; // Optional layout size specifications
}

export interface GenericGridProps {
	pageTitle: string;
	posts: typeof POSTS_DATA;
	defaultLayoutClass: string;
	applyCustomLayouts?: boolean;
}

export interface PostConfigWithComponent extends PostConfig {
	component: React.ComponentType;
}