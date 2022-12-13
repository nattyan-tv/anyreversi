const BLACK = "black";
const WHITE = "white";
const BLUE = "blue";
const ALPHA = "alpha";

const FIRST = true;
const SECOND = false;

let player_state = FIRST;

const DEFAULT_CELL = [
    [ALPHA, ALPHA, ALPHA, ALPHA, ALPHA, ALPHA],
    [ALPHA, ALPHA, ALPHA, ALPHA, ALPHA, ALPHA],
    [ALPHA, ALPHA, WHITE, BLACK, ALPHA, ALPHA],
    [ALPHA, ALPHA, BLACK, WHITE, ALPHA, ALPHA],
    [ALPHA, ALPHA, ALPHA, ALPHA, ALPHA, ALPHA],
    [ALPHA, ALPHA, ALPHA, ALPHA, ALPHA, ALPHA],
]

let cell_state = DEFAULT_CELL.concat();

const change_cell = (x, y, color) => {
    /// 指定したセルの色を指定した色に変更する
    const cell = document.getElementById(`cell${y}${x}`);
    cell.innerHTML = `<img src='/images/cell_${color}.png'>`;
    cell_state[y - 1][x - 1] = color;
}

const clear_plate = () => {
    /// (イニシャライズ用)プレートを作成し、初期盤面にする
    for (y = 1; y <= 6; y++) {
        for (x = 1; x <= 6; x++) {
            const cell = document.getElementById(`cell${y}${x}`);
            cell.innerHTML = "<img src='/images/cell_alpha.png'>";
            cell.setAttribute('onclick', `cell_click(${x}, ${y})`);
        }
    }
}

const show_player = () => {
    /// 今のプレイヤーを表示する
    const pls = document.getElementById("player_show");
    if (player_state) {
        pls.innerHTML = "黒のプレイヤーの番です！";
    } else {
        pls.innerHTML = "白のプレイヤーの番です！";
    }
}

const player_switch = () => {
    /// プレイヤーを変更（して、表示する）
    player_state = !player_state;
    show_player();
}

const cell_click = (x, y) => {
    /// セルをクリックした際の動作
    const color = (player_state ? BLACK : WHITE)

    if (cell_state[y - 1][x - 1] == ALPHA) {
        change_cell(x, y, color);
        // 塗り替え処理...
        player_switch();
    } else {
        alert("そのマスに石は置けないよ！")
    }
}

const main = () => {
    /// 初回起動時の処理（イニシャライズ）
    clear_plate();
    change_cell(3, 3, WHITE);
    change_cell(3, 4, BLACK);
    change_cell(4, 3, BLACK);
    change_cell(4, 4, WHITE);
    cell_state = DEFAULT_CELL.concat();
    show_player();
}

main()