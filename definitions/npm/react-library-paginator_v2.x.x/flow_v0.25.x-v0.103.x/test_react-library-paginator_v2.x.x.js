// @flow
import { describe, it } from 'flow-typed-test';
import React from 'react';
import PaginatorContainer from 'react-library-paginator';

describe('PaginatorContainer ', () => {
  const handlePageChange = (page: number) => {};

  it('should accept all props', () => {
    <PaginatorContainer
      totalItems={10}
      onPageChange={handlePageChange}
      currentPage={1}
      itemsPerPage={4}
      maxPagesToShow={4}
      useBootstrapClasses={true}
      styles={{}}
      classes={{}}
      navigation={{}}
    />;
  });

  it('should fail with incompatible types', () => {
    // $ExpectError
    <PaginatorContainer
      totalItems={'777'}
      onPageChange={(str: string) => {}}
      currentPage={{}}
      itemsPerPage={true}
    />;
  });

  it("shouldn't fail with only required props", () => {
    <PaginatorContainer totalItems={10} onPageChange={handlePageChange} />;
  });

  it('should fail when some required props are missing', () => {
    // $ExpectError
    <PaginatorContainer onPageChange={handlePageChange} />;

    // $ExpectError
    <PaginatorContainer totalItems={10} />;
  });

  // test 'classes' props

  it("should accept all fields in 'classes' prop of type PaginatorClasses", () => {
    <PaginatorContainer
      totalItems={10}
      onPageChange={handlePageChange}
      classes={{
        container: 'paginator-container',
        list: 'paginator-list',
        pageItem: 'paginator-item',
        pageLink: 'paginator-link',
        pageLinkActive: 'paginator-link--active',
        pageLinkDisabled: 'paginator-link--disabled'
      }}
    />;
  });

  it("should fail when passing non-object value as 'classes' prop", () => {
    // $ExpectError
    <PaginatorContainer
      totalItems={10}
      onPageChange={handlePageChange}
      classes={'paginator-container'}
    />;
  });

  it("should allow skip fields in 'classes' prop", () => {
    <PaginatorContainer
      totalItems={10}
      onPageChange={handlePageChange}
      classes={{
        container: 'paginator-container',
        pageLink: 'paginator-link',
        pageLinkDisabled: 'paginator-link--disabled'
      }}
    />;
  });

  it("should fail when passing non-string values in 'classes' prop", () => {
    // $ExpectError
    <PaginatorContainer
      totalItems={10}
      onPageChange={handlePageChange}
      classes={{
        container: { test: 1 },
        pageLink: 'paginator-link',
        pageLinkDisabled: 'paginator-link--disabled'
      }}
    />;
  });

  // test 'styles' props

  it("should accept all fields in 'styles' prop of type PaginatorStyles", () => {
    <PaginatorContainer
      totalItems={10}
      onPageChange={handlePageChange}
      styles={{
        container: { padding: '10px 0' },
        list: { marginBottom: 0, padding: 0 },
        pageItem: { padding: '5px 0' },
        pageLink: { padding: '8px 13px', color: '#285e28' },
        pageLinkActive: { backgroundColor: '#b1d1be' },
        pageLinkDisabled: { color: 'gray' }
      }}
    />;
  });

  it("should fail when passing non-object value as 'styles' prop", () => {
    // $ExpectError
    <PaginatorContainer
      totalItems={10}
      onPageChange={handlePageChange}
      classes={'paginator-container-styles'}
    />;
  });

  it("should allow skip fields in 'styles' prop", () => {
    <PaginatorContainer
      totalItems={10}
      onPageChange={handlePageChange}
      styles={{
        list: { marginBottom: 0, padding: 0 },
        pageLink: { padding: '8px 13px', color: '#285e28' },
        pageLinkActive: { backgroundColor: '#b1d1be' },
        pageItem: { padding: '5px 0' }
      }}
    />;
  });

  it("should fail when passing non-object values in 'styles' prop", () => {
    // $ExpectError
    <PaginatorContainer
      totalItems={10}
      onPageChange={handlePageChange}
      styles={{
        container: 'border-bottom: 1px solid #ccc;',
        pageLinkActive: { backgroundColor: '#b1d1be' },
        pageItem: { padding: '5px 0' }
      }}
    />;
  });

  // tets 'navigation' prop

  it("should accept all fields in 'navigation' prop of type Navigation", () => {
    <PaginatorContainer
      totalItems={10}
      onPageChange={handlePageChange}
      navigation={{
        firstPageText: 'fffirst',
        prevPageText: 'back!',
        nextPageText: 'forward!',
        lastPageText: 'lllast',
        hideFirstPageNav: false,
        hidePrevPageNav: false,
        hideNextPageNav: true,
        hideLastPageNav: true
      }}
    />;
  });

  it("should fail when passing non-object value as 'navigation' prop", () => {
    // $ExpectError
    <PaginatorContainer
      totalItems={10}
      onPageChange={handlePageChange}
      navigation={'paginator-navigation-config'}
    />;
  });

  it("should allow skip fields in 'navigation' prop", () => {
    <PaginatorContainer
      totalItems={10}
      onPageChange={handlePageChange}
      navigation={{
        firstPageText: 'fffirst',
        prevPageText: 'back!',
        hideNextPageNav: true,
        hideLastPageNav: true
      }}
    />;
  });

  it("should fail when passing values of incorrect types in 'navigation' prop", () => {
    // $ExpectError
    <PaginatorContainer
      totalItems={10}
      onPageChange={handlePageChange}
      navigation={{
        firstPageText: {},
        prevPageText: 'back!',
        hideLastPageNav: 120
      }}
    />;
  });
});
