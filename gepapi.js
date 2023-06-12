if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log('Географические координаты пользователя:', latitude, longitude);
    }, (error) => {
      console.error('Ошибка получения географических координат:', error);
    });
  } else {
    console.error('Геолокация не поддерживается');
  }
  