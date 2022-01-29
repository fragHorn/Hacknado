exports.getHome = (req, res, next) => {
    res.render('home', {
        pageTitle: 'Home',
        images: [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#008891;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" width="500" height="500" rx="40"/><path class="cls-2" d="M281.69,169.42A18.85,18.85,0,0,1,272.52,153V109.56a8.3,8.3,0,0,0,4.35-7.24V92.67a9,9,0,0,0-4.35-7.24V78.67c0-3.38-1.44-3.86-6.75-6.27,0,0-5.31-3.86-17.38-3.86S231,72.4,231,72.4c-4.34,1.93-6.75,2.89-6.75,6.27v7.24c-2.9,1.45-4.83,3.86-4.83,7.24v9.66c0,3.37,1.93,5.79,4.83,7.24v43.44a18.64,18.64,0,0,1-9.17,15.93c-17.38,10.61-29,29-29,49.71V433.92c0,7.72,6.75,14,15,14h95.57a13.72,13.72,0,0,0,14-14V219.61C310.17,198.38,299.55,180,281.69,169.42ZM273,380.34H198.19V243.26H273Z"/><path class="cls-2" d="M470.73,274.64c0-49.72-12.55-68.54-12.55-68.54H339.92s-12.55,19.31-12.55,68.54c0,24.61,31.38,62.26,62.27,62.26v93.64c-2.42,1-37.65,12.55-37.65,12.55v6.28h93.64v-6.28L408,430.54V336.9C440.32,336.9,470.73,299.74,470.73,274.64Zm-12.55-12.55c0,37.65-23.17,62.26-59.37,62.26s-59.37-25.1-59.37-56c43.44-24.61,56.47,12.55,81.09,12.55S456.25,265,458.18,262.09Z"/><path class="cls-2" d="M142.37,234.21H52.24a4.4,4.4,0,0,1-4.39-4.4V218a4.4,4.4,0,0,1,4.39-4.39h90.13a4.39,4.39,0,0,1,4.39,4.39v11.8A4.39,4.39,0,0,1,142.37,234.21Z"/><path class="cls-2" d="M159.64,267l-17-27.44H52L35,267a31.56,31.56,0,0,0-5.71,18.54V416.43a32.94,32.94,0,0,0,32.94,32.94h70.21a32.93,32.93,0,0,0,32.93-32.94V285.52A31.6,31.6,0,0,0,159.64,267Zm-2.11,115.85H37.09V293.89H157.53v88.94Z"/></g></g></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><style>.cls-1{fill:#fff;}.cls-2,.cls-3{fill:#e8ab46;}.cls-2{fill-rule:evenodd;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" width="500" height="500" rx="40"/><path class="cls-2" d="M433.4,163.33H394.62a14.21,14.21,0,0,0-14.55,14.55v12.47A13.41,13.41,0,0,0,387,202.12l-23.55,33.24c-8.31,12.47-7.62,22.86-7.62,36.71a24.24,24.24,0,0,0,9.7,19.39,24,24,0,0,0,0,38.78,24,24,0,0,0,0,38.79,23.92,23.92,0,0,0-9.7,18.7v27.7a34,34,0,0,0,33.94,33.94h48.48c18,0,33.24-15.24,33.24-33.94v-27.7a22.06,22.06,0,0,0-9.7-18.7,24,24,0,0,0,0-38.79,24,24,0,0,0,0-38.78c6.24-4.16,9.7-11.77,9.7-19.39,0-13.85,1.39-24.24-7.62-36.71L441,202.12c4.15-2.08,6.23-6.93,6.23-11.77V177.88C447.25,169.57,441,163.33,433.4,163.33Zm4.85,14.55v12.47a5.2,5.2,0,0,1-4.85,4.84H394.62a4.72,4.72,0,0,1-4.85-4.84V177.88a4.73,4.73,0,0,1,4.85-4.85H433.4A5.21,5.21,0,0,1,438.25,177.88Zm9,147.52H380.07c-19.39,0-19.39-29.09,0-29.09h67.18C466.64,296.31,466.64,325.4,447.25,325.4Zm0,38.78H380.07c-19.39,0-19.39-29.09,0-29.09h67.18C466.64,335.09,466.64,364.18,447.25,364.18Z"/><path class="cls-3" d="M315.53,196.67a8.45,8.45,0,0,0-5.45-4.28c-6-1.75-19.54-8.29-31.09-34.08H231.11c-7.55,15.12-86.89,178.58-29.86,283.78a8.93,8.93,0,0,0,7,4.65c14.45,1.67,60.22,5.81,103.23-1.82a9.08,9.08,0,0,0,5.09-2.76c7.05-7.63,27.24-35.67,20.85-100.77C337.4,341.39,337.4,237,315.53,196.67ZM226.24,416.29l-12.71,6.91C171.1,345,227.19,222.75,227.77,221.59l13,6.47C229.66,250.29,192.24,353.53,226.24,416.29ZM296,299.91c-18.74-8.79-31.31-79.33-12-81.08,0,0,17.29-.94,24.05,57C308.05,275.86,314.73,308.63,296,299.91Z"/><polygon class="cls-3" points="237.45 100.66 230.38 143.77 279.75 143.77 271.17 100.66 237.45 100.66"/><path class="cls-2" d="M155.36,375.84l-11,57.81c-1.61,8.49-7.07,15.72-15.7,15.72h-63c-8.63,0-14.09-7.23-15.7-15.72L39,375.84ZM34.4,252.22H159.94c8.09,0,8.09,12.25,0,12.25H34.4c-8.09,0-8.09-12.25,0-12.25Zm121,19.62-11,57.81c-1.61,8.49-7.07,15.72-15.7,15.72h-63c-8.63,0-14.09-7.23-15.7-15.72L39,271.84Zm-121,84.38H159.94c8.09,0,8.09,12.25,0,12.25H34.4c-8.09,0-8.09-12.25,0-12.25Z"/></g></g></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#63797c;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" width="500" height="500" rx="40"/><path class="cls-2" d="M448.44,207.53a7.51,7.51,0,0,0,7.35-7.34,7.36,7.36,0,0,0-7.35-7.35H402.66a4.9,4.9,0,0,1,0-9.8h3.95a7.88,7.88,0,0,0,7.82-7.91v-9.71c0-8.19-5.65-15.92-13.75-17.24a16.54,16.54,0,0,0-19.41,16.3v28.36h-93a7.29,7.29,0,0,0-7.35,7.35,7.44,7.44,0,0,0,4.71,6.87,7.57,7.57,0,0,0,2.64.47h3l-10.36,29.21V422.42a19.4,19.4,0,0,0,4.71,12.72,7.36,7.36,0,0,0,2.64,14.23H448.44a7.36,7.36,0,0,0,7.35-7.35,7.49,7.49,0,0,0-4.81-6.88,19.43,19.43,0,0,0,4.81-12.72V236.74l-10.36-29.21Zm-50.59-49.36a7.28,7.28,0,0,1,7.35,7.25,7.35,7.35,0,0,1-14.7,0A7.34,7.34,0,0,1,397.85,158.17Zm18.75,115.5s31.27,83.18,10.66,154.8a9.41,9.41,0,0,1-9.08,6.67H393a9.38,9.38,0,0,1-8-14.33c2.3-3.66,4.82-8,7.34-12.9,25.63-49.65,21.41-110.34.76-153.27,0,0-9.62-20.74-9.5-37.62a9.5,9.5,0,0,1,9.47-9.49h8.85a9.39,9.39,0,0,1,9.36,10.5C409.6,230.85,408.53,253.34,416.6,273.67Z"/><path class="cls-2" d="M257,432.63h-9.36L232.91,181.48a8.37,8.37,0,0,0-1-16.68H215.19V131.33a16.73,16.73,0,0,0-16.74-16.74H98a16.73,16.73,0,0,0-16.74,16.74V164.8H64.54a8.37,8.37,0,0,0-1,16.68L48.79,432.63H39.43a8.37,8.37,0,0,0,0,16.74H257a8.37,8.37,0,0,0,0-16.74ZM98,131.33H198.45V164.8H98Zm16.74,167.39a8.37,8.37,0,0,1,8.37,8.37v8.36H106.39v-8.36A8.36,8.36,0,0,1,114.76,298.72Zm-8.37-50.22v-8.37a8.37,8.37,0,1,1,16.74,0v8.37Zm16.74,92.06a8.37,8.37,0,0,1,16.74,0v8.37H123.13Zm0-58.58v-8.37a8.37,8.37,0,0,1,16.74,0V282Zm16.74-67H123.13v-8.37a8.37,8.37,0,1,1,16.74,0Zm8.37,16.74a8.36,8.36,0,0,1,8.36,8.37v8.37H139.87v-8.37A8.36,8.36,0,0,1,148.24,231.76Zm-8.37,75.33a8.37,8.37,0,1,1,16.73,0v8.36H139.87Zm16.73,33.47a8.37,8.37,0,0,1,16.74,0v8.37H156.6Zm0-58.58v-8.37a8.37,8.37,0,0,1,16.74,0V282Zm0-67v-8.37a8.37,8.37,0,0,1,16.74,0V215Zm16.74,92.07a8.37,8.37,0,0,1,16.74,0v8.36H173.34Zm0-58.59v-8.37a8.37,8.37,0,0,1,16.74,0v8.37ZM89.65,206.65a8.37,8.37,0,0,1,16.74,0V215H89.65Zm0,67a8.37,8.37,0,0,1,16.74,0V282H89.65Zm0,66.95a8.37,8.37,0,0,1,16.74,0v8.37H89.65Zm16.74,75.33H89.65v-8.37a8.37,8.37,0,0,1,16.74,0Zm0-41.85a8.37,8.37,0,1,1,16.74,0v8.37H106.39Zm33.48,41.85H123.13v-8.37a8.37,8.37,0,0,1,16.74,0Zm0-41.85a8.37,8.37,0,1,1,16.73,0v8.37H139.87Zm33.47,41.85H156.6v-8.37a8.37,8.37,0,0,1,16.74,0Zm0-41.85a8.37,8.37,0,0,1,16.74,0v8.37H173.34Zm33.48,41.85H190.08v-8.37a8.37,8.37,0,0,1,16.74,0Zm0-67H190.08v-8.37a8.37,8.37,0,0,1,16.74,0Zm0-66.95H190.08v-8.37a8.37,8.37,0,0,1,16.74,0Zm0-67H190.08v-8.37a8.37,8.37,0,0,1,16.74,0Z"/></g></g></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#719ccb;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" width="500" height="500" rx="40"/><path class="cls-2" d="M253.77,251.6H87.66a4,4,0,0,0-4,4v161c-1.21,15-6.07,22.08-17,24.31a4.18,4.18,0,0,0-1,.06,22.18,22.18,0,0,1-26.62-21.54V281.62h-8V419.11s0,.06,0,.09,0,.12,0,.18v.27h0a30.19,30.19,0,0,0,30.14,29.72c.7,0,1.41-.06,2.11-.11a4.4,4.4,0,0,0,.73.07H224.43A33.37,33.37,0,0,0,257.76,416V255.6A4,4,0,0,0,253.77,251.6ZM109.31,277.24H237.17v8H109.31ZM237.23,302.7v34.76H159V302.7Zm-127.92-3.95h35.52v8H109.31Zm0,17.49h35.52v8H109.31Zm0,17.48h35.52v8H109.31Zm56.41,80.35H109.31v-8h56.41Zm0-17.68H109.31v-8h56.41Zm0-17.67H109.31v-8h56.41Zm0-17.68H109.31v-8h56.41Zm71.52,53H180.83v-8h56.41Zm0-17.68H180.83v-8h56.41Zm0-17.67H180.83v-8h56.41Zm0-17.68H180.83v-8h56.41Z"/><path class="cls-2" d="M61.19,436a16.7,16.7,0,0,0,16.72-16.22c0-.07,0-.14,0-.2H78V281.66H70V418.92a3.82,3.82,0,0,0-.09.59,8.74,8.74,0,0,1-17.48-.31v-.37c0-.11,0-.22,0-.32V281.66h-8V419.59h0A16.78,16.78,0,0,0,61.19,436Z"/><rect class="cls-2" x="57.82" y="281.73" width="7.99" height="138.12"/><path class="cls-2" d="M462.49,449.37V340.22H287.86V449.37ZM342.43,356.6a5.46,5.46,0,0,1,5.46-5.46h54.57a5.45,5.45,0,0,1,5.46,5.46v21.82a5.45,5.45,0,0,1-5.46,5.46H347.89a5.46,5.46,0,0,1-5.46-5.46Z"/><rect class="cls-2" x="293.32" y="143.77" width="163.71" height="21.83"/><rect class="cls-2" x="353.35" y="198.34" width="43.66" height="10.91"/><rect class="cls-2" x="353.35" y="362.05" width="43.66" height="10.91"/><path class="cls-2" d="M446.12,285.65V176.51H304.23V285.65ZM342.43,192.88a5.47,5.47,0,0,1,5.46-5.46h54.57a5.46,5.46,0,0,1,5.46,5.46v21.83a5.46,5.46,0,0,1-5.46,5.46H347.89a5.47,5.47,0,0,1-5.46-5.46Z"/><rect class="cls-2" x="276.95" y="296.57" width="196.46" height="32.74"/></g></g></svg>'
        ],
    });
};