import {IWorkSheet} from 'xlsx'
import * as excel from 'ts-xlsx'

export class ExcelUtil{
    static ReadExcelSheet(filepath:string): IWorkSheet{
        let file=excel.readFile(filepath);
        let sheet = file.Sheets["Sheet1"];
        return excel.utils.sheet_to_json(sheet)[0];

    }
}