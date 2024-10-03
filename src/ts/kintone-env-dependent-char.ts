import { KintoneRestAPIClient, KintoneRecordField } from "@kintone/rest-api-client";


// リポジトリURL
// https://github.com/takokke/yutaka-test-order-infomation

(() => {
    'use strict';
    /* 定数の定義*/

    const APP_IDs = {
        "アプリ別更新タイムスタンプ": 122
    }

    // 末尾に[縺]を入れる
    /* 関数の定義 */
    const replaceNonJISCharacters = (input: string) => {

        const JISRegex = /[^\u0020-\u007E\u00A1-\u00DF\u2000-\u2115\u2122-\u215F\u216A-\u2210\u2212-\u221E\u2220-\u22BE\u22C0-\u245F\u2474-\u2FFF\u3000-\u303F\u3041-\u3093\u30A1-\u30F6\u30FB-\u30FC\u4E00-\u5149\u514B-\u590A\u590C-\u595A\u595C-\u5962\u5964-\u5BEB\u5BED-\u5D41\u5D43-\u68C7\u68C9-\u70FA\u70FC-\u7E49-\u84DB\u84DD-\u9357\u9359-\u9FA0\uFF61-\uFF9F\uFF01-\uFF5E\uFF10-\uFF5E]/g;

        // 置き換え文字を定義
        let replacementCharacter = '[縺]';

        return input.replace(JISRegex, replacementCharacter);
    }

    // 環境依存文字をチェックする関数
    // 機種依存文字を含む場合、trueを返す
    const containsNonJISCharacters =  (input: string)=>{
        /* 定数の定義*/
        const JISRegex = /[^\u0020-\u007E\u00A1-\u00DF\u2000-\u2115\u2122-\u215F\u216A-\u2210\u2212-\u221E\u2220-\u22BE\u22C0-\u245F\u2474-\u2FFF\u3000-\u303F\u3041-\u3093\u30A1-\u30F6\u30FB-\u30FC\u4E00-\u5149\u514B-\u590A\u590C-\u595A\u595C-\u5962\u5964-\u5BEB\u5BED-\u5D41\u5D43-\u68C7\u68C9-\u70FA\u70FC-\u7E49-\u84DB\u84DD-\u9357\u9359-\u9FA0\uFF61-\uFF9F\uFF01-\uFF5E\uFF10-\uFF5E]/g;
        /*  
            意図的に省く文字
            \u2116\u2121・・・No.とTEL

            \u2160\u2161\u2162\u2163\u2164\u2165\u2166\u2167\u2168\u2169・・・ローマ数字

            \u2211・・・シグマ記号(総和)


            \u221F・・・直角
            \u22BF・・・三角形

            \u2460-\u2473・・・丸かこみ文字


            \u32a4\u32a5\u32a6\u32a7\u32a8
            \u33cd
        */

        //範囲
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

       return JISRegex.test(input);
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
    
        現依存文字あり: KintoneRecordField.CheckBox;
        注文商品チェックボックス: KintoneRecordField.CheckBox;
        依存文字あり: KintoneRecordField.CheckBox;
        同時注文チェックボックス: KintoneRecordField.CheckBox;
    }

    type updateTimeStampData = {
        $id: KintoneRecordField.ID;
        $revision: KintoneRecordField.Revision;
        更新者: KintoneRecordField.Modifier;
        作成者: KintoneRecordField.Creator;
        レコード番号: KintoneRecordField.RecordNumber;
        更新日時: KintoneRecordField.UpdatedTime;
        作成日時: KintoneRecordField.CreatedTime;
        日時:  KintoneRecordField.DateTime;
        ｱﾌﾟﾘID: KintoneRecordField.SingleLineText;
        更新日: KintoneRecordField.Date;
    }

    // レコード保存時・更新時

    kintone.events.on(["app.record.create.submit", "app.record.edit.submit"], (event) => {
        const record = event.record;

        // チェック対象フィールドのリスト
        const fieldsToCheck = [
            record.住所1.value,
            record.住所2.value,
            record.個人名_団体.value,
            record.個人名_団体_フリガナ.value,
            record.担当者_名.value,
            record.担当者_名_フリガナ.value,
            record.担当者_姓.value,
            record.担当者_姓_フリガナ.value,
            record.都道府県.value
        ];

        // 非JIS文字が含まれているかのフラグ
        let hasNonJISCharacters = false;

        // 各フィールドの値を確認
        fieldsToCheck.forEach((fieldValue) => {
            if (fieldValue && containsNonJISCharacters(fieldValue)) {
                hasNonJISCharacters = true;
                console.log(fieldValue + "は機種依存文字を含みます。");
            }
        });

        // 「現依存文字あり」フィールドに「あり」をチェック
        if (hasNonJISCharacters) {
            record.現依存文字あり.value = ["あり"];
            console.log("ありをセット");
        } else {
            record.現依存文字あり.value = [];
        }

        return event;
    })    

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
            
            
                if (fieldValue === null || typeof fieldValue !== 'string') {
                    console.log(`${fieldCode} は値がnullまたは文字列ではありません。`);
                    return;
                }
                
                const containsNonJIS = containsNonJISCharacters(fieldValue);
                const containsSpecialChar = fieldValue.includes("[縺]");
            
               
            
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

            try {

                const now = new Date();
                // フィールドコード「日時」
                const isoString = now.toISOString().slice(0, 17) + "00Z";
                console.log(isoString);
                // フィールドコード「更新日」
                const dateString = now.toISOString().slice(0, 10);

                document.getElementById('replace_button')?.classList.add("click");
                button.disabled = true;
                
                const client = new KintoneRestAPIClient({});
                const APP_ID = kintone.app.getId();

                if (APP_ID === null) {
                    throw new Error("アプリIDが取得できませんでした。");
                }

                const getUpdateTime = {
                    app: APP_IDs.アプリ別更新タイムスタンプ,
                    query: `ｱﾌﾟﾘID = "${APP_ID}"`
                }

                const getUpdateTimeResp = await client.record.getRecords<updateTimeStampData>(getUpdateTime);

                // アプリID122のタイムスタンプから更新日時を取得
                if (getUpdateTimeResp.records.length === 0 ) {
                    throw new Error("レコードを取得できません");
                }

                const updateTimeRecord = getUpdateTimeResp.records[0]
                console.log(updateTimeRecord.日時.value)

                // const updateRecordId = updateTimeRecord.$id

                const updateTimeStampParams = {
                    app: APP_IDs.アプリ別更新タイムスタンプ,
                    id: updateTimeRecord.$id.value,
                    record: {
                        日時: {
                            value: `${isoString}`
                        },
                        更新日: {
                            value: `${dateString}`
                        }
                    }
                }

                await client.record.updateRecord(updateTimeStampParams);

                const getRecordsParams = {
                    app: APP_ID,
                    query: `更新日時 >= "${updateTimeRecord.日時.value}"`
                }

                // const getAllRecordsResp = await client.record.getAllRecords<ShippingData>(getAllRecordsParams);
                const getRecordsResp = await client.record.getRecords<ShippingData>(getRecordsParams);
                const JISRegex = /[^\u0020-\u007E\u00A1-\u00DF\u2000-\u2115\u2122-\u215F\u216A-\u2210\u2212-\u221E\u2220-\u22BE\u22C0-\u245F\u2474-\u2FFF\u3000-\u303F\u3041-\u3093\u30A1-\u30F6\u30FB-\u30FC\u4E00-\u5149\u514B-\u590A\u590C-\u595A\u595C-\u5962\u5964-\u5BEB\u5BED-\u5D41\u5D43-\u68C7\u68C9-\u70FA\u70FC-\u7E49-\u84DB\u84DD-\u9357\u9359-\u9FA0\uFF61-\uFF9F\uFF01-\uFF5E\uFF10-\uFF5E]/g;
                

                const targetRecords: ShippingData[] =[];
                const noTargetRecords: ShippingData[] = [];
                
                getRecordsResp.records.forEach((record) => {
                    const hasNonJISCharacters = 
                        JISRegex.test(record.住所1.value) ||
                        JISRegex.test(record.住所2.value) || 
                        JISRegex.test(record.個人名_団体.value) || 
                        JISRegex.test(record.個人名_団体_フリガナ.value) ||
                        JISRegex.test(record.担当者_名.value) ||
                        JISRegex.test(record.担当者_名_フリガナ.value) ||
                        JISRegex.test(record.担当者_姓.value) ||
                        JISRegex.test(record.担当者_姓_フリガナ.value) ||
                        JISRegex.test(record.都道府県.value);
    
                    if (hasNonJISCharacters) {
                        targetRecords.push(record);
                    } else {
                        noTargetRecords.push(record);
                    }
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
                            },
                            依存文字あり: {
                                value: ['あり']
                            },
                            現依存文字あり: {
                                value: ['あり']
                            }
                        }
                    };
                    updateRecords.push(updateRecord);
                });

                noTargetRecords.forEach((record) => {
                    let updateRecord = {
                        id: record.$id.value,
                        record: {
                            現依存文字あり: {
                                value: []
                            }
                        }
                    };
                    updateRecords.push(updateRecord)
                })

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
                    replaceButton.innerHTML = "<span></span>機種依存文字を置換する";
                }
                button.disabled = false;
                
                alert("機種依存文字の置換が完了しました");

                // location.reload();

            } catch (err) {
                if (err instanceof Error) {
                    console.error(err);
                    alert(err.message);
                } else {
                    console.error(err);
                    alert("An unknown error occurred");
                }
                // ボタン要素を取得
                const replaceButton = document.getElementById("replace_button");

                // クラスを削除
                if (replaceButton) {
                    replaceButton.classList.remove("click");
                    // HTMLを更新
                    replaceButton.innerHTML = "<span></span>環境依存文字を置換する";
                }
                button.disabled = false;
            }
        };
        
        const headerMenuSpace = kintone.app.getHeaderMenuSpaceElement();
        headerMenuSpace?.appendChild(button);
        
        return event;
    });

})();