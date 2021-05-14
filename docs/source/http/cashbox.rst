cashboxes/<kktRegId>
====================

Метод возвращает реквизиты кассы по её регистрационному номеру (РНМ).

**GET <endpoint>/v2/organizations/<organizationId>/cashboxes/<kktRegId>**

В запросе должен быть переданы следующие параметры:

- `organizationId`: обязательный, уникальный идентификатор организации
- `kktRegId`: обязательный, регистрационный номер кассы (РНМ)


Пример запроса:

::

  GET /v2/organizations/c2e3a34c-823f-4b1e-a9g1-d94fa40c22a6/cashboxes/0000800000000005 HTTP/1.1
  Host: ofd-project.kontur.ru:11002
  Cache-Control: no-cache
  X-Kontur-Ofd-ApiKey: 031c1890-9hhe-435e-5h59-43091hhcd71d
  Authorization: auth.sid 77F90D0CF33SEF67SWRG87B9BBA7139F0CD76GRTY00931F2E1F0D

В теле ответа возвращаются ревизиты кассы в виде JSON-объекта следующей структуры:

::

  {
    "regNumber": "",            // регистрационный номер ККТ (РНМ)
    "serialNumber": "",         // заводской номер ККТ
    "address": "",              // текущий адрес размещения ККТ (адрес осуществления расчетов между пользователем и покупателем)
    "addresses":[               // список всех адресов размещения ККТ, в том числе и текущий
             {                                   
             "address":"",      // адрес размещения ККТ
             "startDate":""     // дата начала передачи документов по этому адресу
             },
             {
              "address":"",       
              "startDate":""   
              },
                 ...
             ],
    "name": "",                 // наименование ККТ
    "modelName": "",            // модель ККТ
    "kpp": "",                  // КПП, указанный при подключении кассы в ЛК, либо КПП организации (в остальных случаях)
    "fiscalDrive":              // текущий фискальный накопитель
      {
        "fiscalDriverNumber": "",         // заводской номер фискального накопителя
        "earliestDocumentTimestamp": ""   // дата первого документа, который хранится у нас, для этого фискального накопителя
      },
    "fiscalDrives":             // список всех фискальных накопителей для кассы, в том числе и текущий
      [
        {
          "fiscalDriverNumber": "",
          "earliestDocumentTimestamp": ""
        },
        {
          "fiscalDriverNumber": "",
          "earliestDocumentTimestamp": ""
        },
        ...
      ],
    "salesPointName": "",       // название текущей точки продаж
    "permissionFrom": "",       // дата, с которой интегратор может получать документы
    "permissionTo": ""          // дата, по которую интегратор может получать документы
  }


Пример ответа:

::

  {
    "regNumber": "0000800000000005",
    "serialNumber": "00106700332501",
    "address": "г. Екатеринбург. ул. Малопрудная 5",
    "addresses":[
                {                                    
                "address":"г.Москва Ул. победы д52", 
                "startDate":"2019-09-12T00:00:00"     
                },
                {
                "address":"г. Екатеринбург. ул. Малопрудная 5",       
                "startDate":"2020-01-19T00:00:00"   
                },
                 ...
              ],
    "name": "Касса 1",
    "modelName": "АТОЛ 30Ф",
    "kpp": "669901001",
    "fiscalDrive":
      {
        "fiscalDriverNumber": "9492452823423233",
        "earliestDocumentTimestamp": "2019-10-10T00:00:00"
      },
    "fiscalDrives":
      [
        {
          "fiscalDriverNumber": "4393456832322943",
          "earliestDocumentTimestamp": "2017-11-12T00:00:00"
        },
        {
          "fiscalDriverNumber": "9492452823423233",
          "earliestDocumentTimestamp": "2019-10-10T00:00:00"
        }
      ],
    "salesPointName": "Четвертая точка продаж",
    "permissionFrom": "2018-12-12T00:00:00",
    "permissionTo": "2018-12-14T14:14:41"
  }
