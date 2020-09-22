// 下载
export const download = async (name, url) => {
    let url1 = /http/.test(url) ? url : "http://" + url;
    if (/jpg/.test(name)) {
        let eleForm = document.createElement("form");
        eleForm.method = "get";
        eleForm.action = url1; //这是下载地址
        eleForm.target = "_blank";
        eleForm.download = name;
        document.body.appendChild(eleForm);
        eleForm.submit();
        document.body.removeChild(eleForm);
    }
    if (/doc|xls/.test(url)) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url1);
        xhr.onload = () => {
            if (xhr.status === 200) {
                if (/xml version="1.0"/.test(xhr.response)) {
                    let res = window.URL.createObjectURL(
                        new Blob([xhr.response], {
                            type: "application/msword;charset=UTF-8"
                        })
                    );

                    let a = document.createElement("a");
                    a.setAttribute("href", res);
                    a.setAttribute("target", "_blank");
                    a.setAttribute("id", "startTelMedicine");
                    a.setAttribute("download", name);
                    // 防止反复添加
                    if (document.getElementById("startTelMedicine")) {
                        document.body.removeChild(
                            document.getElementById("startTelMedicine")
                        );
                    }
                    document.body.appendChild(a);
                    a.click();
                } else {
                    let eleForm = document.createElement("form");
                    eleForm.method = "get";
                    eleForm.action = url1; //这是下载地址
                    eleForm.target = "_blank";
                    eleForm.download = name;
                    document.body.appendChild(eleForm);
                    eleForm.submit();
                    document.body.removeChild(eleForm);
                }
            }
        };
        xhr.send();
    }
}
// 已有文件数据转换  处理成展示需要的
export const translateFile = (fileList) => {
    if (Array.isArray(fileList)) {
        return fileList.map(item => {
            return {
                uid: item.uuid,
                status: "done",
                url: "http://" + item.url,
                name: item.name
            };
        });
    }
    return [];
}