documents/<documentId>
======================

С помощью метода интегратор может получить отдельный фискальный документ в формате JSON-объекта.

**GET <endpoint>/v2/organizations/<organizationId>/statistics/cash-receipt/by-days?from=<dateFrom>&to=<dateTo>**

В запросе должны быть переданы следующие параметры:

- `organizationId`: обязательный, уникальный идентификатор организации, документы которой необходимо получить
- `kktRegId`: обязательный, РН ККТ кассы, документы которой необходимо получить
- `documentId`: обязательный, уникальный идентификатор документа


Пример запроса:

::

  GET v2/organizations/c2e3a34c-823f-4b1e-a9g1-d94fa40c22a6/cashboxes/0000000003065868/documents/00000000-0000-0000-0000-000000000000 HTTP/1.1
  Host: ofd-project.kontur.ru:11002
  Cache-Control: no-cache
  X-Kontur-Ofd-ApiKey: 031c1890-9hhe-435e-5h59-43091hhcd71d
  Authorization: auth.sid 77F90D0CF33SEF67SWRG87B9BBA7139F0CD76GRTY00931F2E1F0D


Для получения списка организаций и касс, к которым у пользователя есть доступ, необходимо использовать методы :doc:`organizations` и :doc:`cashboxes`.

Для получения идентификатора документа необходимо использовать методы получения фискальных документов :doc:`documents-by-period` и :doc:`documents`


Тело ответа содержит JSON-объект с реквизитами, соответствующими фискальному документу и указанными в разделе :doc:`../Structures`.

::

  {
    Тип ФД:
      {
        Данные ФД
      }
  }



Пример ответа:

::

  {
    "openShift": {
        "code": 2,
        "user": "",
        "userInn": "6699009482",
        "operator": "Герман Илья",
        "retailPlaceAddress": "",
        "dateTime": "2018-04-05T10:00:00",
        "shiftNumber": 367,
        "kktRegId": "0000000003065868    ",
        "fiscalDriveNumber": "99990788607     ",
        "fiscalDocumentNumber": 39089,
        "fiscalSign": 2034496394,
        "id": "00000000-0000-0000-0000-000000000000" 
    }
  }


Возможные значения типов ФД
---------------------------

::

  {
    "fiscalReport",           //Отчет о регистрации
    "fiscalReportCorrection", //Отчёт об изменении параметров регистрации
    "openShift",              //Отчет об открытии смены
    "currentStateReport",     //Отчёт о текущем состоянии расчетов
    "receipt",                //Кассовый чек
    "receiptCorrection",      //Кассовый чек коррекции
    "bso",                    //БСО
    "bsoCorrection",          //Бланк строгой отчетности коррекции
    "closeShift",             //Отчёт о закрытии смены
    "closeArchive"            //Отчёт о закрытии фискального накопителя
  }


Набор полей для каждого типа фискальных документов приведен в разделе :doc:`../Structures`.
