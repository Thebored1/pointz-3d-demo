// Shared FAQ data for the Moffett/flatbed page. Kept in a plain (non-"use client")
// module so both the server page (for FAQPage JSON-LD) and the client component
// (for the accordion) can import the actual array. Importing data across the
// client boundary from a "use client" module yields a client reference, not the
// value — hence this separate module.
//
// Copy is verbatim from MOFFETT_PAGE_DRAFT.md.
export const MOFFETT_FAQS = [
  ['What is a Moffett truck?', 'A Moffett truck is typically a flatbed or other suitable truck equipped with a truck-mounted forklift. The forklift travels with the truck and can be used to unload eligible materials and equipment at the delivery location.'],
  ['What is a Moffett forklift?', 'A Moffett forklift is a truck-mounted forklift designed to travel with the delivery vehicle. It provides onsite unloading capability for suitable materials, equipment and other loads.'],
  ['How much can a Moffett forklift lift?', "Point Zero's Moffett-equipped trucks offer lifting capacity of up to 5,500 lbs, subject to the specific equipment configuration, load characteristics and operating requirements."],
  ['What is the difference between a 2-way and 4-way Moffett?', 'A 2-way Moffett provides forward and backward movement. A 4-way Moffett also provides lateral movement, offering additional maneuverability for certain delivery and positioning requirements.'],
  ['Can a Moffett deliver to a construction site?', 'Yes. Moffett-equipped flatbeds can be suitable for construction-site deliveries, including suitable outdoor environments. The site must provide adequate truck and Moffett access and safe operating conditions.'],
  ['Can a Moffett operate on gravel or uneven ground?', 'Moffett forklifts can operate on suitable gravel and uneven-ground conditions. Actual suitability depends on the specific site, ground conditions, load and operating environment.'],
  ['Can you deliver without a forklift at the destination?', 'Yes. One of the primary benefits of Moffett delivery is that the forklift travels with the truck, eliminating the need for the customer to arrange separate unloading equipment for suitable deliveries.'],
  ['How much space does a Moffett need?', 'The required space depends on the truck, Moffett configuration, load and delivery requirements. The Moffett needs sufficient room to enter, maneuver and safely operate at the delivery location.'],
  ['Can you place materials where we need them?', 'For suitable loads and sites, our driver can unload and move materials toward the required placement area. Final placement depends on access, ground conditions, load characteristics and safe operating requirements.'],
  ['Do you provide Moffett delivery throughout the GTA?', 'Yes. Point Zero provides Moffett-equipped flatbed delivery throughout the GTA, including Toronto, Mississauga, Brampton, Vaughan and surrounding communities.'],
  ['What information do you need for a Moffett delivery quote?', 'We recommend providing the pickup and delivery locations, material type, approximate weight, dimensions, delivery date and any information about site access or required placement.'],
  ['Do you provide Moffett delivery for residential customers?', 'Yes, where the load, delivery location and site conditions are suitable for Moffett unloading.'],
];
