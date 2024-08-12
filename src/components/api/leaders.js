export const API = {
  baseHost: "https://wedev-api.sky.pro/api/leaderboard",

  //Получение списка лидеров
  async getLeaders({ token }) {
    const response = await fetch(this.baseHost, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.status === 200) {
      throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
  },

  //Добавление лидера в список
  async addLeader({ token }) {
    const response = await fetch(this.baseHost, {
      method: "POST",
      body: JSON.stringify("?"), //  что сюда принять?????
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Ошибка при добавлении");
    }

    return response.json();
  },
};
