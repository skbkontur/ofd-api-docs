Преобразование сертификатов
===========================

Для конвертации пользовательского сертификата в формат PEM:

- Откройте сертификат для просмотра (например, средствами Windows) – вкладка «Состав» – «Копировать в файл» – при сохранении выберите кодировку «Base-64»,
- либо воспользуйтесь утилитой ``certutil`` из набора «Certificate Services», указав имена файлов сертификата до и после конвертации: ``certutil.exe -encode input_certificate_file output_certificate_file``

Сертификат в Base-64:
::

  -----BEGIN CERTIFICATE-----
  MIIJTzCCCP6gAwIBAgIKLUfNEQAAAAKeZjAIBgYqhQMCAg
  .......
  ig6Wya0ui9H9fTASUKfeJoOHE6u01whF06AZ3YrAMkluO1E=
  -----END CERTIFICATE-----
