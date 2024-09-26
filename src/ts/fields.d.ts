declare namespace kintone.types {
  interface Fields {
    備考: kintone.fieldTypes.MultiLineText;
    プリントオプション代: kintone.fieldTypes.Number;
    会員: kintone.fieldTypes.SingleLineText;
    注文方法: kintone.fieldTypes.SingleLineText;
    ポイント割引: kintone.fieldTypes.Number;
    獲得ポイント: kintone.fieldTypes.Number;
    名前差替代: kintone.fieldTypes.Number;
    緊急連絡先: kintone.fieldTypes.SingleLineText;
    電話番号: kintone.fieldTypes.SingleLineText;
    ご利用について: kintone.fieldTypes.SingleLineText;
    注文番号: kintone.fieldTypes.SingleLineText;
    刷りサンプル: kintone.fieldTypes.SingleLineText;
    担当者_姓_フリガナ: kintone.fieldTypes.SingleLineText;
    担当者_姓: kintone.fieldTypes.SingleLineText;
    Tシャツ合計: kintone.fieldTypes.Number;
    掲載について: kintone.fieldTypes.SingleLineText;
    型代: kintone.fieldTypes.Number;
    住所2: kintone.fieldTypes.SingleLineText;
    住所1: kintone.fieldTypes.SingleLineText;
    支払方法: kintone.fieldTypes.SingleLineText;
    修正: kintone.fieldTypes.Number;
    送料合計: kintone.fieldTypes.Number;
    分納数: kintone.fieldTypes.Number;
    担当者_名_フリガナ: kintone.fieldTypes.SingleLineText;
    メールアドレス: kintone.fieldTypes.SingleLineText;
    タオル合計: kintone.fieldTypes.Number;
    個人名_団体: kintone.fieldTypes.SingleLineText;
    総額: kintone.fieldTypes.Number;
    刺繍: kintone.fieldTypes.Number;
    箱代: kintone.fieldTypes.Number;
    郵便番号1: kintone.fieldTypes.SingleLineText;
    郵便番号2: kintone.fieldTypes.SingleLineText;
    担当者_名: kintone.fieldTypes.SingleLineText;
    割引: kintone.fieldTypes.Number;
    個人名_団体_フリガナ: kintone.fieldTypes.SingleLineText;
    同時注文割引: kintone.fieldTypes.Number;
    都道府県: kintone.fieldTypes.SingleLineText;
    同時注文番号: kintone.fieldTypes.SingleLineText;
    FAX: kintone.fieldTypes.SingleLineText;
    ECCUBEリンク: kintone.fieldTypes.Link;
    その他: kintone.fieldTypes.Number;

    注文商品チェックボックス: kintone.fieldTypes.CheckBox;
    同時注文チェックボックス: kintone.fieldTypes.CheckBox;
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    作成日時: kintone.fieldTypes.CreatedTime;
    更新日時: kintone.fieldTypes.UpdatedTime;
  }
}
