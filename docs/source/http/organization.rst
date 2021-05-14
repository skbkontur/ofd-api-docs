organizations/<organizationId>
==============================

Метод возвращает реквизиты организации по её идентификатору.

**GET <endpoint>/v2/organizations/<organizationId>**

В запросе должен быть передан один параметр:

- `organizationId`: обязательный, уникальный идентификатор организации


Пример запроса:

::

  GET /v2/organizations/c2e3a34c-823f-4b1e-a9g1-d94fa40c22a6 HTTP/1.1
  Host: ofd-project.kontur.ru:11002
  Cache-Control: no-cache
  X-Kontur-Ofd-ApiKey: 031c1890-9hhe-435e-5h59-43091hhcd71d
  Authorization: auth.sid 77F90D0CF33SEF67SWRG87B9BBA7139F0CD76GRTY00931F2E1F0D

**Обратите внимание, что X-Kontur-Ofd-ApiKey и Cookie передаются в заголовках.**

В теле ответа возвращаются реквизиты организации в виде JSON-объекта следующей структуры:

::

  {
    "id": "",           //идентификатор организации
    "inn": "",          //ИНН
    "kpp": "",          //КПП
    "ogrn": "",         //ОГРН
    "shortName": "",    //краткое наименование
    "fullName": ""      //полное наименование
  }


Пример ответа:

::

  {
    "id": "c2e3a34c-823f-4b1e-a9g1-d94fa40c22a6",
    "inn": "6699000000",
    "kpp": "669901001",
    "ogrn": "000000000000000",
    "shortName": "ООО Тестовая организация",
    "fullName": "Общество с органиченной ответственностью Тестовая организация"
  }
