export function renderHeader() {
    const headerHtml = `
        <header style="flex-shrink:0; display:flex; justify-content:space-between; align-items:center; height:60px; padding:0 20px; background-color:#ffffff; border-bottom:1px solid #e0e0e0;">
            <div style="display:flex; align-items:center; gap:10px;">
                <img src="file/icon.png" alt="" style="height:40px;">
                <img src="file/title.png" alt="" style="height:30px;">
            </div>
            <div style="position:relative;">
                <div id="userProfileBtn" style="display:flex; align-items:center; gap:8px; cursor:pointer; padding:5px; border-radius:5px;">
                    <img src="file/icon.png" alt="" style="width:32px; height:32px; border-radius:50%; object-fit:cover;">
                    <span style="color:#000000; font-weight:bold;">ユーザー</span>
                    <span style="padding:4px 8px; border-radius:12px; color:#ffffff; font-size:12px; font-weight:bold; background-color:#800080;">役員</span>
                    <span style="font-size:10px; color:#666;">▼</span>
                </div>
                <div id="dropdownMenu" style="display:none; position:absolute; top:50px; right:0; background-color:#ffffff; border:1px solid #ccc; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1); width:150px; z-index:100;">
                    <ul style="list-style:none; padding:0; margin:0;">
                        <li style="padding:12px 15px; font-size:14px; cursor:pointer; border-bottom:1px solid #eee;">アカウント情報</li>
                        <li id="logoutBtn" style="padding:12px 15px; font-size:14px; cursor:pointer; color:#ff0000; font-weight:bold;">ログアウト</li>
                    </ul>
                </div>
            </div>
        </header>
    `;
    document.getElementById("header-container").innerHTML = headerHtml;

    document.getElementById("userProfileBtn").addEventListener("click", () => {
        const menu = document.getElementById("dropdownMenu");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
}

export function renderSidebar() {
    const sidebarHtml = `
        <div style="width:80px; background-color:#ffffff; border-left:1px solid #e0e0e0; display:flex; flex-direction:column; align-items:center; padding:20px 0 80px 0; gap:25px; overflow-y:auto;">
            <a href="index.html" style="display:flex; flex-direction:column; align-items:center; text-decoration:none; color:#333; font-size:11px;">
                <img src="file/top.jpg" alt="" style="width:36px; height:36px; border-radius:8px; margin-bottom:5px; object-fit:cover;">
                <span>トップ</span>
            </a>
            <a href="board.html" style="display:flex; flex-direction:column; align-items:center; text-decoration:none; color:#333; font-size:11px;">
                <img src="file/board.jpg" alt="" style="width:36px; height:36px; border-radius:8px; margin-bottom:5px; object-fit:cover;">
                <span>掲示板</span>
            </a>
            <a href="calendar.html" style="display:flex; flex-direction:column; align-items:center; text-decoration:none; color:#333; font-size:11px;">
                <img src="file/calendar.jpg" alt="" style="width:36px; height:36px; border-radius:8px; margin-bottom:5px; object-fit:cover;">
                <span>カレンダー</span>
            </a>
            <a href="meeting.html" style="display:flex; flex-direction:column; align-items:center; text-decoration:none; color:#333; font-size:11px;">
                <img src="file/meeting.jpg" alt="" style="width:36px; height:36px; border-radius:8px; margin-bottom:5px; object-fit:cover;">
                <span>会議</span>
            </a>
            <a href="history.html" style="display:flex; flex-direction:column; align-items:center; text-decoration:none; color:#333; font-size:11px;">
                <img src="file/history.jpg" alt="" style="width:36px; height:36px; border-radius:8px; margin-bottom:5px; object-fit:cover;">
                <span>活動記録</span>
            </a>
            <a href="materials.html" style="display:flex; flex-direction:column; align-items:center; text-decoration:none; color:#333; font-size:11px;">
                <img src="file/materials.jpg" alt="" style="width:36px; height:36px; border-radius:8px; margin-bottom:5px; object-fit:cover;">
                <span>資料</span>
            </a>
            <a href="member/index.html" style="display:flex; flex-direction:column; align-items:center; text-decoration:none; color:#333; font-size:11px;">
                <img src="file/members.jpg" alt="" style="width:36px; height:36px; border-radius:8px; margin-bottom:5px; object-fit:cover;">
                <span>メンバー</span>
            </a>
            <a href="report.html" style="display:flex; flex-direction:column; align-items:center; text-decoration:none; color:#333; font-size:11px;">
                <img src="file/report.jpg" alt="" style="width:36px; height:36px; border-radius:8px; margin-bottom:5px; object-fit:cover;">
                <span>レポート</span>
            </a>
            <a href="setting.html" style="display:flex; flex-direction:column; align-items:center; text-decoration:none; color:#333; font-size:11px;">
                <img src="file/setting.jpg" alt="" style="width:36px; height:36px; border-radius:8px; margin-bottom:5px; object-fit:cover;">
                <span>設定</span>
            </a>
        </div>
    `;
    document.getElementById("sidebar-container").innerHTML = sidebarHtml;
}
