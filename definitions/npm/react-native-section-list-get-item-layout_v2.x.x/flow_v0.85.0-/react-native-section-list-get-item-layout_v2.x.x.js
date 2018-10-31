declare module "react-native-section-list-get-item-layout" {
  declare export type SectionListDataProp = Array<{
    title: string,
    data: any[]
  }>;

  declare export type Parameters = {
    getItemHeight: (
      rowData: any,
      sectionIndex: number,
      rowIndex: number
    ) => number,
    getSeparatorHeight?: (sectionIndex: number, rowIndex: number) => number,
    getSectionHeaderHeight?: (sectionIndex: number) => number,
    getSectionFooterHeight?: (sectionIndex: number) => number,
    listHeaderHeight?: number | (() => number)
  };

  declare export default (
    Parameters
  ) => (
    data: SectionListDataProp,
    index: number
  ) => {
    length: number,
    offset: number,
    index: number
  };
}
