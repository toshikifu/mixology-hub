/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SearchImport } from './routes/search'
import { Route as FavoritesImport } from './routes/favorites'
import { Route as CocktailImport } from './routes/cocktail'
import { Route as IndexImport } from './routes/index'
import { Route as CocktailIndexImport } from './routes/cocktail.index'
import { Route as CocktailIdImport } from './routes/cocktail.$id'

// Create/Update Routes

const SearchRoute = SearchImport.update({
  id: '/search',
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const FavoritesRoute = FavoritesImport.update({
  id: '/favorites',
  path: '/favorites',
  getParentRoute: () => rootRoute,
} as any)

const CocktailRoute = CocktailImport.update({
  id: '/cocktail',
  path: '/cocktail',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CocktailIndexRoute = CocktailIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => CocktailRoute,
} as any)

const CocktailIdRoute = CocktailIdImport.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => CocktailRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/cocktail': {
      id: '/cocktail'
      path: '/cocktail'
      fullPath: '/cocktail'
      preLoaderRoute: typeof CocktailImport
      parentRoute: typeof rootRoute
    }
    '/favorites': {
      id: '/favorites'
      path: '/favorites'
      fullPath: '/favorites'
      preLoaderRoute: typeof FavoritesImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/cocktail/$id': {
      id: '/cocktail/$id'
      path: '/$id'
      fullPath: '/cocktail/$id'
      preLoaderRoute: typeof CocktailIdImport
      parentRoute: typeof CocktailImport
    }
    '/cocktail/': {
      id: '/cocktail/'
      path: '/'
      fullPath: '/cocktail/'
      preLoaderRoute: typeof CocktailIndexImport
      parentRoute: typeof CocktailImport
    }
  }
}

// Create and export the route tree

interface CocktailRouteChildren {
  CocktailIdRoute: typeof CocktailIdRoute
  CocktailIndexRoute: typeof CocktailIndexRoute
}

const CocktailRouteChildren: CocktailRouteChildren = {
  CocktailIdRoute: CocktailIdRoute,
  CocktailIndexRoute: CocktailIndexRoute,
}

const CocktailRouteWithChildren = CocktailRoute._addFileChildren(
  CocktailRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/cocktail': typeof CocktailRouteWithChildren
  '/favorites': typeof FavoritesRoute
  '/search': typeof SearchRoute
  '/cocktail/$id': typeof CocktailIdRoute
  '/cocktail/': typeof CocktailIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/favorites': typeof FavoritesRoute
  '/search': typeof SearchRoute
  '/cocktail/$id': typeof CocktailIdRoute
  '/cocktail': typeof CocktailIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/cocktail': typeof CocktailRouteWithChildren
  '/favorites': typeof FavoritesRoute
  '/search': typeof SearchRoute
  '/cocktail/$id': typeof CocktailIdRoute
  '/cocktail/': typeof CocktailIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/cocktail'
    | '/favorites'
    | '/search'
    | '/cocktail/$id'
    | '/cocktail/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/favorites' | '/search' | '/cocktail/$id' | '/cocktail'
  id:
    | '__root__'
    | '/'
    | '/cocktail'
    | '/favorites'
    | '/search'
    | '/cocktail/$id'
    | '/cocktail/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CocktailRoute: typeof CocktailRouteWithChildren
  FavoritesRoute: typeof FavoritesRoute
  SearchRoute: typeof SearchRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CocktailRoute: CocktailRouteWithChildren,
  FavoritesRoute: FavoritesRoute,
  SearchRoute: SearchRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/cocktail",
        "/favorites",
        "/search"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/cocktail": {
      "filePath": "cocktail.tsx",
      "children": [
        "/cocktail/$id",
        "/cocktail/"
      ]
    },
    "/favorites": {
      "filePath": "favorites.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    },
    "/cocktail/$id": {
      "filePath": "cocktail.$id.tsx",
      "parent": "/cocktail"
    },
    "/cocktail/": {
      "filePath": "cocktail.index.tsx",
      "parent": "/cocktail"
    }
  }
}
ROUTE_MANIFEST_END */
