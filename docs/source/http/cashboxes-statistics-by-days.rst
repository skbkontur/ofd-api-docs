cashboxes/statistics/by-days
============================

Метод возвращает по кассе и временному периоду информацию в разрезе суток. В сутках хранится массив агрегированных данных.

**GET <endpoint>/v2/organizations/<organizationId>/cashboxes/<kktRegId>/statistics/cash-receipt/by-days?from=<dateFrom>&to=<dateTo>**

В запросе должны быть переданы следующие параметры:

- `organizationId`: обязательный, уникальный идентификатор организации, информацию о которой необходимо получить
- `kktRegId`: обязательный, РНМ кассы, документы которой необходимо получить
- `dateFrom`: обязательный, дата формирования фискальных документов, начиная с которой необходимо получить документы
- `dateTo`: обязательный, дата формирования фискальных документов, по которую (включительно) необходимо получить документы

Допустимые форматы для параметров `dateFrom` и `dateTo`: гггг-мм-дд, гггг.мм.дд, дд-мм-гггг, дд.мм.гггг.

Пример запроса:

::

  GET v2/organizations/c2e3a34c-823f-4b1e-a9g1-d94fa40c22a6/cashboxes/0000000003065868/statistics/cash-receipt/by-days?from=2019-01-01&to=2019-03-01 HTTP/1.1
  Host: ofd-project.kontur.ru:11002
  Cache-Control: no-cache
  ofd_api_key=031c1890-9hhe-435e-5h59-43091hhcd71d;auth.sid=FEC4B58C200EC54BJ7GE4PO0032821C4E7E79C795HHAS395JD16C002EC125CFA;

Для получения списка организаций и касс, к которым у пользователя есть доступ, необходимо использовать методы :doc:`organizations` и :doc:`cashboxes`.

В теле ответа возвращается информация в разрезе дней. Список возвращается в виде массива JSON-объектов следующей структуры:

::

  {
    items:
      [
        {
          Информация по дню
        },
        {
          Информация по дню
        }
      ]
  }


Пример ответа в разрезе двух дней:

::

		{
		  "items": [
			{
			  "date": "2019-11-05",                   	 //Дата и время агрегации данных. День первый
			  "buy": {				                     //Покупка. Информация по чекам с признаком «расход»
				"cashlessTotal": 245754,		         //Сумма безналичными в копейках
				"cashTotal": 360542,		             //Сумма наличными в копейках
				"total": 606296,			             //Общая сумма в копейках
				"totalWithNds0": 0,		                 //Сумма НДС 0% в копейках
				"totalWithNdsFree": 0,		             //Сумма без НДС в копейках
				"count": 14,			                 //Количество чеков
				"nds": {
				  "rate10": 0,			                 //Сумма НДС 10% в копейках
				  "calculatedWithRate10": 0,	         //Сумма НДС 10/110 в копейках
				  "rate18": 0,			                 //Сумма НДС 18% в копейках
				  "calculatedWithRate18": 0,	//Сумма НДС 18/118 в копейках
				  "rate20": 101051,			//Сумма НДС 20% в копейках
				  "calculatedWithRate20": 0	//Сумма НДС 20/120 в копейках
				}
			  },
			  "returnBuy": {	//Возврат покупки. Информация по чекам с признаком «возврат расхода»
				"cashlessTotal": 37202,
				"cashTotal": 132320,
				"total": 169522,
				"totalWithNds0": 0,
				"totalWithNdsFree": 0,
				"count": 4,
				"nds": {
				  "rate10": 0,
				  "calculatedWithRate10": 0,
				  "rate18": 0,
				  "calculatedWithRate18": 0,
				  "rate20": 28253,
				  "calculatedWithRate20": 0
				}
			  },
			  "sell": {					//Продажа. Информация по чекам с признаком «приход»
				"cashlessTotal": 2862884,
				"cashTotal": 3316499,
				"total": 6179383,
				"totalWithNds0": 0,
				"totalWithNdsFree": 0,
				"count": 166,
				"nds": {
				  "rate10": 0,
				  "calculatedWithRate10": 0,
				  "rate18": 0,
				  "calculatedWithRate18": 0,
				  "rate20": 1029913,
				  "calculatedWithRate20": 0
				}
			  },
			  "returnSell": {	//Возврат продажи. Информация по чекам с признаком «возврат прихода»
				"cashlessTotal": 414383,
				"cashTotal": 171692,
				"total": 586075,
				"totalWithNds0": 0,
				"totalWithNdsFree": 0,
				"count": 16,
				"nds": {
				  "rate10": 0,
				  "calculatedWithRate10": 0,
				  "rate18": 0,
				  "calculatedWithRate18": 0,
				  "rate20": 97681,
				  "calculatedWithRate20": 0
				}
			  }
			},
			{
			  "date": "2019-11-06,			//Дата и время агрегации данных. День второй
			  "buy": {
				"cashlessTotal": 327200,
				"cashTotal": 402772,
				"total": 729972,
				"totalWithNds0": 0,
				"totalWithNdsFree": 0,
				"count": 18,
				"nds": {
				  "rate10": 0,
				  "calculatedWithRate10": 0,
				  "rate18": 0,
				  "calculatedWithRate18": 0,
				  "rate20": 121665,
				  "calculatedWithRate20": 0
				}
			  },
				"returnBuy": {
				"cashlessTotal": 129720,
				"cashTotal": 92343,
				"total": 222063,
				"totalWithNds0": 0,
				"totalWithNdsFree": 0,
				"count": 4,
				"nds": {
				  "rate10": 0,
				  "calculatedWithRate10": 0,
				  "rate18": 0,
				  "calculatedWithRate18": 0,
				  "rate20": 37010,
				  "calculatedWithRate20": 0
				}
			  },
			  "sell": {
				"cashlessTotal": 3363914,
				"cashTotal": 3010182,
				"total": 6374096,
				"totalWithNds0": 0,
				"totalWithNdsFree": 0,
				"count": 160,
				"nds": {
				  "rate10": 0,
				  "calculatedWithRate10": 0,
				  "rate18": 0,
				  "calculatedWithRate18": 0,
				  "rate20": 1062367,
				  "calculatedWithRate20": 0
				}
			  },
			  "returnSell": {
				"cashlessTotal": 303281,
				"cashTotal": 357152,
				"total": 660433,
				"totalWithNds0": 0,
				"totalWithNdsFree": 0,
				"count": 17,
				"nds": {
				  "rate10": 0,
				  "calculatedWithRate10": 0,
				  "rate18": 0,
				  "calculatedWithRate18": 0,
				  "rate20": 110074,
				  "calculatedWithRate20": 0
						} 
					}
			}
				]
	  }


Для получения по кассе и периоду информации в разрезе смен, используйте метод :doc:`cashboxes-statistics-by-shifts`