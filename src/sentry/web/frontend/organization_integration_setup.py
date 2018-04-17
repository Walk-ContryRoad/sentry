from __future__ import absolute_import, print_function

import logging

from sentry.integrations.pipeline import IntegrationPipeline
from sentry.web.frontend.base import OrganizationView

logger = logging.getLogger('sentry.integrations')


class OrganizationIntegrationSetupView(OrganizationView):
    required_scope = 'org:integrations'

    csrf_protect = False

    def handle(self, request, organization, provider_id):
        pipeline = IntegrationPipeline(
            request=request,
            organization=organization,
            provider_key=provider_id,
        )
        pipeline.initialize()

        return pipeline.current_step()
