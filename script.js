const data_format = {
    //霞ヶ丘
    "葵町ー霞ヶ丘4-1":"kasumigaoka","葵町ー霞ヶ丘4-1":"kasumigaoka",
    //霞ヶ丘ー葵町
    "葵町ー霞ヶ丘1":"kasumigaoka-aoicho","葵町ー霞ヶ丘2":"kasumigaoka-aoicho","葵町ー霞ヶ丘3":"kasumigaoka-aoicho",
    "霞ヶ丘ー葵町1":"kasumigaoka-aoicho","霞ヶ丘ー葵町2":"kasumigaoka-aoicho",
    //葵町
    "千早ー葵町6":"aoicho","霞ヶ丘ー葵町3":"aoicho",
    //葵町ー千早
    "葵町ー千早1":"aoicho-chihaya","葵町ー千早2":"aoicho-chihaya","葵町ー千早3":"aoicho-chihaya","葵町ー千早4":"aoicho-chihaya","葵町ー千早5":"aoicho-chihaya",
    "千早ー葵町1":"aoicho-chihaya","千早ー葵町2":"aoicho-chihaya","千早ー葵町3":"aoicho-chihaya","千早ー葵町4":"aoicho-chihaya","千早ー葵町5":"aoicho-chihaya",
    //千早
    "羽ノ森ー千早5":"chihaya","葵町ー千早6":"chihaya",
    //千早ー羽ノ森
    "千早ー羽ノ森1":"chihaya-hanomori","千早ー羽ノ森2":"chihaya-hanomori","千早ー羽ノ森3":"chihaya-hanomori","千早ー羽ノ森4":"chihaya-hanomori",
    "羽ノ森ー千早1":"chihaya-hanomori","羽ノ森ー千早2":"chihaya-hanomori","羽ノ森ー千早3":"chihaya-hanomori","羽ノ森ー千早4":"chihaya-hanomori",
    //羽ノ森
    "千早ー羽ノ森5":"hanomori","新原ー羽ノ森7":"hanomori",
    //羽ノ森ー新原
    "新原ー羽ノ森1":"hanomori-sinbara","新原ー羽ノ森2":"hanomori-sinbara","新原ー羽ノ森3":"hanomori-sinbara","新原ー羽ノ森4":"hanomori-sinbara","新原ー羽ノ森5":"hanomori-sinbara","新原ー羽ノ森6":"hanomori-sinbara",
    "羽ノ森ー新原1":"hanomori-sinbara","羽ノ森ー新原2":"hanomori-sinbara","羽ノ森ー新原3":"hanomori-sinbara","羽ノ森ー新原4":"hanomori-sinbara","羽ノ森ー新原5":"hanomori-sinbara","羽ノ森ー新原6":"hanomori-sinbara",
    //新原
    "羽ノ森ー新原7":"sinbara","桜ヶ台ー新原4":"sinbara",
    //新原ー桜ヶ台
    "桜ヶ台ー新原1":"sinbara-sakuragadai","桜ヶ台ー新原2":"sinbara-sakuragadai","桜ヶ台ー新原3":"sinbara-sakuragadai",
    "新原ー桜ヶ台1":"sinbara-sakuragadai","新原ー桜ヶ台2":"sinbara-sakuragadai","新原ー桜ヶ台3":"sinbara-sakuragadai",
    //桜ヶ台
    "新原ー桜ヶ台4":"sakuragadai","小野谷ー桜ヶ台8":"sakuragadai",
    //桜ヶ台ー小野谷
    "小野谷ー桜ヶ台1":"sakuragadai-onoya","小野谷ー桜ヶ台2":"sakuragadai-onoya","小野谷ー桜ヶ台3":"sakuragadai-onoya","小野谷ー桜ヶ台4":"sakuragadai-onoya","小野谷ー桜ヶ台5":"sakuragadai-onoya","小野谷ー桜ヶ台6":"sakuragadai-onoya","小野谷ー桜ヶ台7":"sakuragadai-onoya",
    "桜ヶ台ー小野谷1":"sakuragadai-onoya","桜ヶ台ー小野谷2":"sakuragadai-onoya","桜ヶ台ー小野谷3":"sakuragadai-onoya","桜ヶ台ー小野谷4":"sakuragadai-onoya","桜ヶ台ー小野谷5":"sakuragadai-onoya","桜ヶ台ー小野谷6":"sakuragadai-onoya","桜ヶ台ー小野谷7":"sakuragadai-onoya",
    //小野谷
    "桜ヶ台ー小野谷8":"onoya","緑原ー小野谷5":"onoya",
    //小野谷ー緑原
    "緑原ー小野谷1":"onoya","緑原ー小野谷2":"onoya","緑原ー小野谷3":"onoya","緑原ー小野谷4":"onoya",
    "小野谷ー緑原1":"onoya","小野谷ー緑原2":"onoya","小野谷ー緑原3":"onoya","小野谷ー緑原4":"onoya",
    //緑原
    "小野谷ー緑原5":"midorihara","白鷺ー緑原7":"midorihara",
    //緑原ー白鷺
    "白鷺ー緑原1":"midorihara-sirasagi","白鷺ー緑原2":"midorihara-sirasagi","白鷺ー緑原3":"midorihara-sirasagi","白鷺ー緑原4":"midorihara-sirasagi","白鷺ー緑原5":"midorihara-sirasagi","白鷺ー緑原6":"midorihara-sirasagi",
    "緑原ー白鷺1":"midorihara-sirasagi","緑原ー白鷺2":"midorihara-sirasagi","緑原ー白鷺3":"midorihara-sirasagi","緑原ー白鷺4":"midorihara-sirasagi","緑原ー白鷺5":"midorihara-sirasagi","緑原ー白鷺6":"midorihara-sirasagi",
    //白鷺
    "緑原ー白鷺7":"sirasagi","青峰ー白鷺4":"sirasagi",
    //白鷺ー青峰
    "青峰ー白鷺1":"sirasagi-aomine","青峰ー白鷺2":"sirasagi-aomine","青峰ー白鷺3":"sirasagi-aomine","青峰ー白鷺4":"sirasagi-aomine",
    "白鷺ー青峰1":"sirasagi-aomine","白鷺ー青峰2":"sirasagi-aomine","白鷺ー青峰3":"sirasagi-aomine","白鷺ー青峰4":"sirasagi-aomine",
    //青峰
    "青峰":"aomine","白鷺ー青峰5":"aomine"
};

const ImageTable = {
    "各駅停車":"LocalYajirusi.png",
    "急行":"ExpressYajirusi.png",
    "回送":"NoYajirusi.png",
    "試運転":"NoYajirusi.png",
    "臨時":"NoYajirusi.png",
    "No Type":"undefindYajirusi.png"
}

const url = "https://script.google.com/macros/s/AKfycbytm2-n8psSbxCvMoqMQkh3Ld1p_mtQwIJ-yPao1gNCEuzItVjQGS57mjwLwes7Y_-M/exec";

function fetchJsonData() {
    //被りを保存
    let overlap = {
        "kasumigaokaA":1,"kasumigaoka-aoichoA":1,"aoichoA":1,"aoicho-chihayaA":1,"chihayaA":1,"chihaya-hanomoriA":1,"hanomoriA":1,
        "hanomori-sinbaraA":1,"sinbaraA":1,"sinbara-sakuragadaiA":1,"sakuragadaiA":1,"sakuragadai-onoyaA":1,"onoyaA":1,
        "onoya-midoriharaA":1,"midoriharaA":1,"midorihara-sirasagiA":1,"sirasagiA":1,"sirasagi-aomineA":1,"aomineA":1,

        "kasumigaokaB":1,"kasumigaoka-aoichoB":1,"aoichoB":1,"aoicho-chihayaB":1,"chihayaB":1,"chihaya-hanomoriB":1,"hanomoriB":1,
        "hanomori-sinbaraB":1,"sinbaraB":1,"sinbara-sakuragadaiB":1,"sakuragadaiB":1,"sakuragadai-onoyaB":1,"onoyaB":1,
        "onoya-midoriharaB":1,"midoriharaB":1,"midorihara-sirasagiB":1,"sirasagiB":1,"sirasagi-aomineB":1,"aomineB":1
    }

    var InputJobId = document.getElementById('jobid').value;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("ネットワークエラーが発生しました");
            }
            return response.json();
        })
        .then(data => {
            // train-elementを持つ要素をすべて削除
            const oldElements = document.querySelectorAll(".train-element");
            oldElements.forEach(element => {
                element.remove();
            });

            // train-groupを持つ要素をすべて削除
            const oldElements2 = document.querySelectorAll(".train-group");
            oldElements2.forEach(element => {
                element.remove();
            });

            data.forEach((item, index) => {
                const target = document.getElementById(data_format[item["現在位置"]]);
                const sliceJobId = item["サーバーId"];
                if (!target || InputJobId !== sliceJobId.slice(0,8)) return; //現在位置が無いor入力されたJobIdが違う場合return

                const targetX = (Number(target.getAttribute("x1")) + Number(target.getAttribute("x2"))) / 2;
                const targetY = (Number(target.getAttribute("y1")) + Number(target.getAttribute("y2"))) / 2;
                const svgCanvas = document.getElementById("svgCanvas");

                const newLine = document.createElementNS("http://www.w3.org/2000/svg", "image");
                newLine.setAttribute("class", "train-element");
                newLine.setAttribute("href", ImageTable[item["種別"]]);    
                newLine.setAttribute("width", "40");  
                newLine.setAttribute("height", "40");
                newLine.style.cursor = "pointer";

                const infoGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
                infoGroup.setAttribute("class", "train-group");
                infoGroup.style.display = "none"; // 最初は非表示

                const infoImage = document.createElementNS("http://www.w3.org/2000/svg", "image");
                infoImage.setAttribute("href", "infomation.png");
                infoImage.setAttribute("width", "120");
                infoImage.setAttribute("height", "80");
                infoImage.setAttribute("x", "0");
                infoImage.setAttribute("y", "0");
                infoGroup.appendChild(infoImage);

                const textDest = document.createElementNS("http://www.w3.org/2000/svg", "text");
                if(item["列車番号"] === "No Number") textDest.textContent = "列車番号設定なし";
                else textDest.textContent = "列車番号:" + item["列車番号"];
                textDest.setAttribute("text-anchor", "start");
                textDest.setAttribute("font-size", "12px");
                textDest.setAttribute("x", "15");
                textDest.setAttribute("fill", "#000000");
                infoGroup.appendChild(textDest);

                const textType = document.createElementNS("http://www.w3.org/2000/svg", "text");
                if(item["行き先"] === "No Dest") textType.textContent = "行先設定なし";
                else textType.textContent = item["行き先"] + "行き";
                textType.setAttribute("text-anchor", "start");
                textType.setAttribute("font-size", "12px");
                textType.setAttribute("x", "15");
                textType.setAttribute("fill", "#000000");
                infoGroup.appendChild(textType);

                let posX, posY;
                if (item["上下"] === 'A') {
                    posX = targetX - 50 * overlap[data_format[item["現在位置"]] + item["上下"]];
                    posY = targetY - 20;
                    newLine.setAttribute("transform", `rotate(0, ${posX}, ${posY})`);

                    infoImage.setAttribute("transform", "rotate(180, 60, 40)");
                    infoGroup.setAttribute("transform", `translate(${posX - 65}, ${posY - 80})`);

                    textDest.setAttribute("y", "27");
                    textType.setAttribute("y", "47");
                } else {
                    posX = targetX + 50 * overlap[data_format[item["現在位置"]] + item["上下"]];
                    posY = targetY + 20;
                    newLine.setAttribute("transform", `rotate(180, ${posX}, ${posY})`);

                    infoGroup.setAttribute("transform", `translate(${posX - 55}, ${posY})`);

                    textDest.setAttribute("y", "40");
                    textType.setAttribute("y", "60");
                }

                newLine.setAttribute("x", posX);    
                newLine.setAttribute("y", posY); 

                //表示非表示を切り替え
                newLine.addEventListener("click", (e) => {
                    const currentDisplay = infoGroup.style.display;
                    infoGroup.style.display = (currentDisplay === "none") ? "block" : "none";
                    e.stopPropagation();
                });

                svgCanvas.appendChild(newLine);
                svgCanvas.appendChild(infoGroup);
                
                overlap[data_format[item["現在位置"]] + item["上下"]] += 1;
            });
        })
        .catch(error => {
            console.error("エラー:", error);
        });
}

fetchJsonData();
setInterval(fetchJsonData, 30000);
