export default class Api {
  constructor({ serviсeId, templateId, userId, apiUrl }) {
    this._serviсeId = serviсeId;
    this._templateId = templateId;
    this._userId = userId;
    this._apiUrl = apiUrl;
  }

  sendMessage(sendingData) {
    const data = {
      service_id: this._serviсeId,
      template_id: this._templateId,
      user_id: this._userId,
      template_params: sendingData,
    };

    return fetch(this._apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}
