
export type TDeaths = {
  name: string
  description: string
  death: string
  img: string,
  matches?: {
    name?: string[]
    description?: string[]
    death?: string[],
    count?: number
  }
}

export const getDeaths = (): TDeaths[] => [
  {
    name: 'Нед Старк',
    description: 'Лорд Винтерфелла, Хранитель Севера, Десница короля.',
    death: 'Обезглавлен сиром Илином Пейном по приказу короля Джоффри.',
    img: 'https://vignette.wikia.nocookie.net/gameofthrones/images/f/f1/%D0%AD%D0%B4%D0%B4%D0%B0%D1%80%D0%B4_%D0%A1%D1%82%D0%B0%D1%80%D0%BA_%D0%B2%D0%BE_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F_%D0%BA%D0%B0%D0%B7%D0%BD%D0%B8_1x09.jpg/revision/latest?cb=20180330115721&path-prefix=ru'
  },
  {
    name: 'Робб Старк',
    description: 'Король Севера, Лорд Винтерфелла.',
    death: 'Заколот Русе Болтоном во время Красной свадьбы.. После смерти ему отрубили голову и пришили к туловищу голову его лютоволка Серого Ветра.',
    img: 'https://vignette.wikia.nocookie.net/gameofthrones/images/0/0a/%D0%A0%D1%83%D1%81%D0%B5_%D0%91%D0%BE%D0%BB%D1%82%D0%BE%D0%BD_%D0%B8_%D0%A0%D0%BE%D0%B1%D0%B1_%D0%A1%D1%82%D0%B0%D1%80%D0%BA_3x09_1.jpg/revision/latest/scale-to-width-down/1000?cb=20161026135247&path-prefix=ru'
  },
  {
    name: 'Кейтилин Старк',
    description: 'Вдова Неда Старка, мать короля Робба Старка.',
    death: 'Во время Красной свадьбы Раймунд Фрей перерезал ей горло.',
    img: 'https://vignette.wikia.nocookie.net/gameofthrones/images/5/5e/%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9_%D0%A3%D0%BE%D0%BB%D0%B4%D0%B5%D1%80_%D1%83%D0%B1%D0%B8%D0%B2%D0%B0%D0%B5%D1%82_%D0%9A%D0%B5%D0%B9%D1%82%D0%B8%D0%BB%D0%B8%D0%BD_3x09.jpg/revision/latest/scale-to-width-down/1000?cb=20181217120951&path-prefix=ru'
  },
  {
    name: 'Роберт Баратеон',
    description: 'Король Семи Королевств.',
    death: 'Умер от ран, нанесенных ему диким кабаном, на охоте.',
    img: 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/89/%D0%A0%D0%BE%D0%B1%D0%B5%D1%80%D1%82_%D0%91%D0%B0%D1%80%D0%B0%D1%82%D0%B5%D0%BE%D0%BD_1x07.jpg/revision/latest/scale-to-width-down/1000?cb=20160821073632&path-prefix=ru'
  },
  {
    name: 'Ренли Баратеон',
    description: 'Самопровозглашенный король Семи Королевств.',
    death: 'Был убит колдовской тенью, вызванной Мелисандрой.',
    img: 'https://vignette.wikia.nocookie.net/gameofthrones/images/a/a1/RenlysDeathS2Ep5.png/revision/latest?cb=20160719015826'
  },
  {
    name: 'Джоффри Баратеон',
    description: 'Король Семи Королевств.',
    death: 'Отравлен на собственной свадьбе леди Оленной Тирелл.',
    img: 'https://vignette.wikia.nocookie.net/gameofthrones/images/b/b7/%D0%94%D0%B6%D0%BE%D1%84%D1%84%D1%80%D0%B8_%D0%BE%D1%82%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD_4x02_1.jpg/revision/latest/scale-to-width-down/1000?cb=20161031084719&path-prefix=ru'
  },
  {
    name: 'Тайвин Ланнистер',
    description: 'Лорд Утеса Кастерли, Хранитель Запада, Десница короля.',
    death: 'Застрелен из арбалета своим сыном Тирионом в отхожем месте башни Десницы.',
    img: 'https://vignette.wikia.nocookie.net/gameofthrones/images/9/94/%D0%A2%D0%B0%D0%B9%D0%B2%D0%B8%D0%BD_%D0%9B%D0%B0%D0%BD%D0%BD%D0%B8%D1%81%D1%82%D0%B5%D1%80_4x10.jpg/revision/latest?cb=20161221185628&path-prefix=ru'
  },
  {
    name: 'Теон Грейджой (Вонючка)',
    description: 'Слуга Рамси Сноу.',
    death: 'Расстрелян из луков людьми Родрика Касселя, принявшими его за самого Рамси.',
    img: 'https://vignette.wikia.nocookie.net/gameofthrones/images/f/f5/%D0%A1%D0%B0%D0%BD%D1%81%D0%B0_%D0%A1%D1%82%D0%B0%D1%80%D0%BA_%D0%B8_%D0%A2%D0%B5%D0%BE%D0%BD_%D0%93%D1%80%D0%B5%D0%B9%D0%B4%D0%B6%D0%BE%D0%B9_8x04.jpg/revision/latest/scale-to-width-down/1000?cb=20190506060305&path-prefix=ru'
  },
  {
    name: 'Рамси Сноу',
    description: 'Бастард лорда Русе Болтона, впоследствии признанный законнорождённым сыном.',
    death: 'Разорван, своими же псами, на части.',
    img: 'https://vignette.wikia.nocookie.net/gameofthrones/images/a/a1/%D0%A1%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0_%D0%B8_%D0%A0%D0%B0%D0%BC%D1%81%D0%B8_6x09.jpg/revision/latest/scale-to-width-down/1000?cb=20190120112238&path-prefix=ru'
  },
  {
    name: 'Кхал Дрого',
    description: 'Один из вождей-кхалов дотракийского народа. Муж Дейнерис Таргариен.',
    death: 'Был исцелен магией крови, но впал в кому и не приходил в сознание. Задушен подушкой.',
    img: 'https://vignette.wikia.nocookie.net/gameofthrones/images/5/57/%D0%94%D0%B5%D0%B9%D0%BD%D0%B5%D1%80%D0%B8%D1%81_%D0%B8_%D0%94%D1%80%D0%BE%D0%B3%D0%BE_1x09.jpg/revision/latest/scale-to-width-down/1000?cb=20160825160625&path-prefix=ru'
  },
  {
    name: 'Дейнерис Таргариен',
    description: 'Дочь «Безумного короля» Эйриса II и королевы Рейлы, свергнутых с железного трона во время восстания Роберта. Мать Драконов.',
    death: 'Убита Джоном Сноу',
    img: 'https://vignette.wikia.nocookie.net/gameofthrones/images/4/4d/%D0%94%D0%B5%D0%B9%D0%BD%D0%B5%D1%80%D0%B8%D1%81_%D1%83%D0%BC%D0%B8%D1%80%D0%B0%D0%B5%D1%82_%D0%BD%D0%B0_%D1%80%D1%83%D0%BA%D0%B0%D1%85_%D0%94%D0%B6%D0%BE%D0%BD%D0%B0_8x06.jpg/revision/latest?cb=20190520183408&path-prefix=ru'
  },
  {
    name: 'Серсея Ланнистер',
    description: 'Королева Семи Королевств, вдова короля Роберта Баратеона.',
    death: 'Погребена под завалами замка с братом Джейми',
    img: 'https://vignette.wikia.nocookie.net/gameofthrones/images/1/18/%D0%A1%D0%B5%D1%80%D1%81%D0%B5%D1%8F_%D0%B8_%D0%94%D0%B6%D0%B5%D0%B9%D0%BC%D0%B5_%D0%BF%D1%80%D0%BE%D1%89%D0%B0%D1%8E%D1%82%D1%81%D1%8F_8x05.jpg/revision/latest?cb=20190514105103&path-prefix=ru'
  },
  {
    name: 'Джейме Ланнистер',
    description: 'Старший сын Тайвина Ланнистера.',
    death: 'Погребен под завалами замка с сестрой Серсеей',
    img: 'https://vignette.wikia.nocookie.net/gameofthrones/images/1/18/%D0%A1%D0%B5%D1%80%D1%81%D0%B5%D1%8F_%D0%B8_%D0%94%D0%B6%D0%B5%D0%B9%D0%BC%D0%B5_%D0%BF%D1%80%D0%BE%D1%89%D0%B0%D1%8E%D1%82%D1%81%D1%8F_8x05.jpg/revision/latest?cb=20190514105103&path-prefix=ru'
  },
  {
    name: 'Ходор',
    description: 'Слуга дома Старков в Винтерфелле. Он умственно отсталый, но силён и многое понимает, предан своим хозяевам.',
    death: 'Умирает под натиском мертвецов, защищая Брана',
    img: 'https://vignette.wikia.nocookie.net/gameofthrones/images/c/ca/%D0%A5%D0%BE%D0%B4%D0%BE%D1%80_%D0%B8_%D0%B2%D0%B8%D1%85%D1%82%D1%8B_4x10.jpg/revision/latest?cb=20161220141736&path-prefix=ru'
  }
]
