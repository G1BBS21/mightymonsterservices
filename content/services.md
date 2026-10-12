# Services

The canonical service list. Names and order must match the **Service Needed** dropdown on
the quote form (`content/forms.json`) and the cards on the Services page.

1. Hauling & Junk Removal
2. Construction & Demolition Cleanup
3. Property & Yard Cleanup
4. Tree & Brush Removal
5. Roofing Services
6. Trash Can Cleaning & Disinfecting
7. Dump Trailer Rentals

"Other" stays as the last dropdown option so unusual jobs still come in.

## Service descriptions

<!-- TODO: paste the approved description for each service from the live Services page. -->

## Adding or renaming a service

1. Edit the list above.
2. Update the `service_needed` options in `content/forms.json`.
3. Update the Services page in Wix Studio and the form dropdown in Wix Forms.
4. If the Services page SEO description in `site/pages.json` names the changed service, update it too.
