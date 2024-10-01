import { KintoneRestAPIClient, KintoneRecordField } from "@kintone/rest-api-client";


// リポジトリURL
// https://github.com/takokke/yutaka-test-order-infomation

(() => {
    'use strict';
    /* 定数の定義*/


    // 末尾に[縺]を入れる
    /* 関数の定義 */
    const replaceNonJISCharacters = (input: string) => {

        const nonJISRegex = /[^\u0020-\u007E\u00A1-\u00DF\uFF61-\uFF9F\u3041-\u3093\u30A1-\u30F6\u30FB-\u30FC\u4E00-\u9FA0\u3000-\u303F\uFF01-\uFF5E\uFF10-\uFF5E\u2000-\u2FFF]/g;

        // 置き換え文字を定義
        let replacementCharacter = '[縺]';

        return input.replace(nonJISRegex, replacementCharacter);
    }

    // 環境依存文字をチェックする関数
    const containsNonJISCharacters =  (input: string)=>{
        /* 定数の定義*/
        const nonJISRegex = /[^\u0020-\u007E\u00A1-\u00DF\uFF61-\uFF9F\u3041-\u3093\u30A1-\u30F6\u30FB-\u30FC\u4E00-\u9FA0\u3000-\u303F\uFF01-\uFF5E\uFF10-\uFF5E\u2000-\u2FFF]/g;
        
        // \u0020-\u007E: 基本的なASCII文字（空白や記号を含む）
        // \u00A1-\u00DF: 半角カタカナとラテン文字の一部
        // \u2000-\u2FFF: 記号・特殊文字
        // \u3041-\u3093: ひらがな
        // \u30A1-\u30F6: カタカナ
        // \u30FB\:「・」中黒
        // \u30FC\:「ー」長音符
        // \u4E00-\u9FA0: 漢字（CJK統合漢字）
        // \u3000-\u303F: 句読点などの日本語の記号
        // \uFF01: ！
        // \uFF02: "
        // \uFF03: #
        // …
        // \uFF5E: ～（波ダッシュ)
        // \uFF10-\uFF19: 全角の数字（０～９）
        // \uFF21-\uFF3A: 全角のアルファベット（大文字 A～Z）
        // \uFF41-\uFF5A: 全角のアルファベット（小文字 a～z）
        // \uFF5E: ～
        // \uFF61-\uFF9F: 半角カタカナ

       return nonJISRegex.test(input);
    }

    /* 型の定義 */ 
    interface KintoneEvent {
        record: kintone.types.SavedFields;
    }

    // 参考記事
    // https://github.com/kintone/js-sdk/blob/main/packages/rest-api-client/docs/typescript.md
    type ShippingData = {
        $id: KintoneRecordField.ID;
        $revision: KintoneRecordField.Revision;
        更新者: KintoneRecordField.Modifier;
        作成者: KintoneRecordField.Creator;
        レコード番号: KintoneRecordField.RecordNumber;
        更新日時: KintoneRecordField.UpdatedTime;
        作成日時: KintoneRecordField.CreatedTime;
        備考: KintoneRecordField.MultiLineText;
        プリントオプション代: KintoneRecordField.Number;
        会員: KintoneRecordField.SingleLineText;
        注文方法: KintoneRecordField.SingleLineText;
        ポイント割引: KintoneRecordField.Number;
        獲得ポイント: KintoneRecordField.Number;
        名前差替代: KintoneRecordField.Number;
        緊急連絡先: KintoneRecordField.SingleLineText;
        電話番号: KintoneRecordField.SingleLineText;
        ご利用について: KintoneRecordField.SingleLineText;
        注文番号: KintoneRecordField.SingleLineText;
        刷りサンプル: KintoneRecordField.SingleLineText;
        担当者_姓_フリガナ: KintoneRecordField.SingleLineText;
        担当者_姓: KintoneRecordField.SingleLineText;
        Tシャツ合計: KintoneRecordField.Number;
        掲載について: KintoneRecordField.SingleLineText;
        型代: KintoneRecordField.Number;
        住所2: KintoneRecordField.SingleLineText;
        住所1: KintoneRecordField.SingleLineText;
        支払方法: KintoneRecordField.SingleLineText;
        修正: KintoneRecordField.Number;
        送料合計: KintoneRecordField.Number;
        分納数: KintoneRecordField.Number;
        担当者_名_フリガナ: KintoneRecordField.SingleLineText;
        メールアドレス: KintoneRecordField.SingleLineText;
        タオル合計: KintoneRecordField.Number;
        個人名_団体: KintoneRecordField.SingleLineText;
        総額: KintoneRecordField.Number;
        刺繍: KintoneRecordField.Number;
        箱代: KintoneRecordField.Number;
        郵便番号1: KintoneRecordField.SingleLineText;
        郵便番号2: KintoneRecordField.SingleLineText;
        担当者_名: KintoneRecordField.SingleLineText;
        割引: KintoneRecordField.Number;
        個人名_団体_フリガナ: KintoneRecordField.SingleLineText;
        同時注文割引: KintoneRecordField.Number;
        都道府県: KintoneRecordField.SingleLineText;
        同時注文番号: KintoneRecordField.SingleLineText;
        FAX: KintoneRecordField.SingleLineText;
        ECCUBEリンク: KintoneRecordField.Link;
        その他: KintoneRecordField.Number;
    
        注文商品チェックボックス: KintoneRecordField.CheckBox;
        同時注文チェックボックス: KintoneRecordField.CheckBox;
    }

    // レコード詳細画面において、環境依存文字を含むフィールドを黄色にする
    // まずは、全種類のフィールドを取得する必要がある。
    kintone.events.on("app.record.detail.show", (event: KintoneEvent)=> {

      
        try {
            const record = event.record;
            // フィールド名を配列で定義
            const fieldCodes: (keyof kintone.types.SavedFields)[] = [
              '住所1',
              '住所2',
              '個人名_団体',
              '個人名_団体_フリガナ',
              '担当者_名',
              '担当者_名_フリガナ',
              '担当者_姓',
              '担当者_姓_フリガナ',
              '都道府県'
            ];

            fieldCodes.forEach(fieldCode => {
                const fieldValue = record[fieldCode]?.value;
            
                // console.log(`フィールド名: ${fieldCode}, 値: ${fieldValue}, 型: ${typeof fieldValue}`);
            
                if (fieldValue === null || typeof fieldValue !== 'string') {
                    console.log(`${fieldCode} は値がnullまたは文字列ではありません。`);
                    return;
                }
                
                const containsNonJIS = containsNonJISCharacters(fieldValue);
                const containsSpecialChar = fieldValue.includes("[縺]");
            
                //console.log(`フィールド名: ${fieldCode}, Non-JIS: ${containsNonJIS}, 特殊文字: ${containsSpecialChar}`);
            
                if (containsNonJIS || containsSpecialChar) {
                    let fieldElement = kintone.app.record.getFieldElement(fieldCode);
                    if (fieldElement === null) {
                        throw new Error(`フィールド "${fieldCode}" が見つかりません`);
                    }
                    fieldElement.style.backgroundColor = 'yellow';
                }
            });

        } catch (err) {
            if (err instanceof Error) {
                console.error(err);
                alert(err.message);
            } else {
                console.error(err);
                alert("An unknown error occurred");
            }
        }

        


        return event;
    })
    // レコード一覧画面
    // 置き換えボタンを表示
    kintone.events.on("app.record.index.show", (event) => {

        if (document.getElementById('replace_button') !== null) {
          return false;
        }
        const button = document.createElement("button");
        button.id = "replace_button";
        button.innerHTML = '<span></span>環境依存文字を置換する';
        
        button.onclick = async () => {
            // 全レコードを取得

            try {

                document.getElementById('replace_button')?.classList.add("click");
                button.disabled = true;
                
                const client = new KintoneRestAPIClient({});
                const APP_ID = kintone.app.getId();

                if (APP_ID === null) {
                    throw new Error("アプリIDが取得できませんでした。");
                }

                const getAllRecordsParams = {
                    app: APP_ID,
                };
                
                const getAllRecordsResp = await client.record.getAllRecords<ShippingData>(getAllRecordsParams);
                const nonJISRegex = /[^\u0020-\u007E\u00A1-\u00DF\uFF61-\uFF9F\u3041-\u3093\u30A1-\u30F6\u30FB-\u30FC\u4E00-\u9FA0\u3000-\u303F\uFF01-\uFF5E\uFF10-\uFF5E\u2000-\u2FFF]/g;
                
                const targetRecords = await getAllRecordsResp.filter((record) => {
                    return nonJISRegex.test(record.住所1.value) ||
                        nonJISRegex.test(record.住所2.value) || 
                        nonJISRegex.test(record.個人名_団体.value) || 
                        nonJISRegex.test(record.個人名_団体_フリガナ.value) ||
                        nonJISRegex.test(record.担当者_名.value) ||
                        nonJISRegex.test(record.担当者_名_フリガナ.value) ||
                        nonJISRegex.test(record.担当者_姓.value) ||
                        nonJISRegex.test(record.担当者_姓_フリガナ.value) ||
                        nonJISRegex.test(record.都道府県.value);
                });

                console.log(targetRecords);
                
                let updateRecords: any[] = [];
                
                // 更新する内容を作成
                targetRecords.forEach((record) => {
                    let updateRecord = {
                        id: record.$id.value,
                        record: {
                            住所1: {
                                value: replaceNonJISCharacters(record.住所1.value)
                            },
                            住所2: {
                                value: replaceNonJISCharacters(record.住所2.value)
                            },
                            個人名_団体: {
                                value: replaceNonJISCharacters(record.個人名_団体.value)
                            },
                            個人名_団体_フリガナ: {
                                value: replaceNonJISCharacters(record.個人名_団体_フリガナ.value)
                            },
                            担当者_名: {
                                value: replaceNonJISCharacters(record.担当者_名.value)
                            },
                            担当者_名_フリガナ: {
                                value: replaceNonJISCharacters(record.担当者_名_フリガナ.value)
                            },
                            担当者_姓: {
                                value: replaceNonJISCharacters(record.担当者_姓.value)
                            },
                            担当者_姓_フリガナ: {
                                value: replaceNonJISCharacters(record.担当者_姓_フリガナ.value)
                            },
                            都道府県: {
                                value: replaceNonJISCharacters(record.都道府県.value)
                            }
                        }
                    };
                    updateRecords.push(updateRecord);
                });

                console.log(updateRecords);

                const updateAllRecordsParams = {
                    app: APP_ID,
                    records: updateRecords,
                };
                
                await client.record.updateAllRecords(updateAllRecordsParams);
                
                // ボタン要素を取得
                const replaceButton = document.getElementById("replace_button");

                // クラスを削除
                if (replaceButton) {
                    replaceButton.classList.remove("click");
                    // HTMLを更新
                    replaceButton.innerHTML = "<span></span>環境依存文字を置換する";
                }
                button.disabled = false;
                
                alert("JIS非対応文字の置換が完了しました");

                location.reload();

            } catch (err) {
                if (err instanceof Error) {
                    console.error(err);
                    alert(err.message);
                } else {
                    console.error(err);
                    alert("An unknown error occurred");
                }
            }
        };
        
        const headerMenuSpace = kintone.app.getHeaderMenuSpaceElement();
        headerMenuSpace?.appendChild(button);
        
        return event;
    });

})();