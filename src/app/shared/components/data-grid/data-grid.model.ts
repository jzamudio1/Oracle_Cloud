export interface ColumnConfig {
  columnDef: string;
  header: string;
  param: string;
  type: 'text' | 'select' | 'number' | 'date' | 'radioButton';
  options?: any[]; //Select
}
