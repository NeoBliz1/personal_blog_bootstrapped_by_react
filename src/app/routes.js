import { useRoutes } from "react-router-dom";
import React, { useState,Suspense } from 'react'

import { MainContainer,RecentPosts,AllPosts,SpinnerLoader,NotFound } from './layouts/mainContainer'

const WCPostFullArticle = React.lazy(() => import('./posts/wcPost')); // Lazy-loaded
const MCPostFullArticle = React.lazy(() => import('./posts/mcPost')); // Lazy-loaded

export default function Router() {
  let element = useRoutes([
    {
      element: <MainContainer />,
      children: [
        { path: '/', element: <RecentPosts /> },
        { path: 'personal_blog_on_react', element: <RecentPosts /> },
        { path: 'allPosts', element: <AllPosts /> },
        { path: 'blogPostAboutWebchat', 
          element: 
            <React.Suspense fallback={<SpinnerLoader/>}>
              <WCPostFullArticle />
            </React.Suspense>                
        },
        { path: '*', element:<NotFound /> }
      ]
    }
  ]);
  return element;
}
