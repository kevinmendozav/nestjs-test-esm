import { Injectable } from '@nestjs/common';
import { createFederation, Federation, MemoryKvStore } from '@fedify/fedify';
@Injectable()
export class FederationService {
   federation
    constructor(
    ) {
      this.federation = createFederation<void>({
        kv: new MemoryKvStore(),
      });
     }


// federation.setActorDispatcher("/users/{identifier}", async (ctx, identifier) => {
//   if (identifier !== "me") return null;  // Other than "me" is not found.
//   return new Person({
//     id: ctx.getActorUri(identifier),
//     name: "Me",  // Display name
//     summary: "This is me!",  // Bio
//     preferredUsername: identifier,  // Bare handle
//     url: new URL("/", ctx.url),
//   });
// });

// Deno.serve(
//   request => federation.fetch(request, { contextData: undefined })
// );
}
