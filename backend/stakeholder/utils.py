from django.http import QueryDict
import json
from rest_framework import parsers

class MultipartJsonParser(parsers.MultiPartParser):

    def parse(self, stream, media_type=None, parser_context=None):
        #result = super().parse(
        #    stream,
        #    media_type=media_type,
        #    parser_context=parser_context
        #)
        # for case1 with nested serializers
        # parse each field with json
        for key, value in stream.items():
            if type(value) != str:
                stream[key] = value
                continue
            if '{' in value or "[" in value:
                try:
                    stream[key] = json.loads(value)
                except ValueError:
                    stream[key] = value
            else:
                stream[key] = value

        # for case 2
        # find the data field and parse it
        data = json.loads(result.stream["data"])

        qdict = QueryDict('', mutable=True)
        qdict.update(data)
        return parsers.DataAndFiles(qdict, result.files)