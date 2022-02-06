const hello = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

// 위 두 함수를 외부(index.js에서 사용할수 있게 export)
module.exports = {
    hello,
    login,
};

