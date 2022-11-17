export default class Api {
  constructor({ serviceId, templateId, userId, apiUrl }) {
    this._serviceId = serviceId;
    this._templateId = templateId;
    this._userId = userId;
    this._apiUrl = apiUrl;
  }

  async sendMessage(sendingData) {
    const data = {
      service_id: this._serviceId,
      template_id: this._templateId,
      user_id: this._userId,
      template_params: sendingData,
    };

    return await fetch(this._apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}
