export const API = {
  baseHost: "https://wedev-api.sky.pro/api/leaderboard",

  //Получение списка лидеров
  async getLeaders() {
    const response = await fetch(this.baseHost);

    if (!response.status === 200) {
      throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
  },

  //Добавление лидера в список
  async addLeader({ name, time }) {
    const response = await fetch(this.baseHost, {
      method: "POST",
      body: JSON.stringify({
        name,
        time,
      }), //  что сюда принять?????
    });

    if (!response.ok) {
      throw new Error("Ошибка при добавлении");
    }

    return response.json();
  },
};
