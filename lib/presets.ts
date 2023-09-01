import { JSONContent } from "@tiptap/core"

export interface Preset {
    id: string
    name: string
    content: JSONContent
  }
  
  export const presets: Preset[] = [
    {
      id: "9cb0e66a-9937-465d-a188-2c4c4ae2401f",
      name: "Freelancer Agreement",
      content: {
        "type": "doc",
        "content": [
            {
                "type": "heading",
                "attrs": {
                    "level": 1
                },
                "content": [
                    {
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ],
                        "text": "FREELANCER AGREEMENT"
                    }
                ]
            },
            {
                "type": "paragraph"
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "This Freelancer Agreement (“Agreement”) is made effective as of [DATE], between [COMPANY NAME], a [TYPE OF LEGAL ENTITY, e.g., corporation] located at [ADDRESS] (the “Company”), and [FREELANCER NAME], an individual located at [ADDRESS] (the “Freelancer”)."
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      1. SERVICES: The Freelancer agrees to provide services to the Company as outlined in Exhibit A (“Services”)."
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      2. COMPENSATION: For the Services provided, the Company agrees to pay the Freelancer as detailed in Exhibit B."
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      3. TERM: The term of this Agreement will commence on the Effective Date and continue until terminated by either Party with written notice."
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      4. CONFIDENTIALITY: The Freelancer shall not disclose any confidential information pertaining to the Company, its business operations, or clients, during or after the term of this Agreement. "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      5. INDEPENDENT CONTRACTOR: The Freelancer is an independent contractor, and nothing within this Agreement creates an employer-employee relationship between the Freelancer and the Company."
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      6. INTELLECTUAL PROPERTY: Any and all intellectual property rights in the work product resulting from the Services will be owned by the Company. "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      7. GOVERNING LAW: This Agreement shall be governed by and construed in accordance with the laws of [STATE/COUNTRY]."
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      EXHIBIT A"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      [Include a detailed description of the Services that the Freelancer promises to provide.]"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      EXHIBIT B"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      [Provide details about the Freelancer’s pay, including amount, pay schedule, and any benefits.]"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      IN WITNESS WHEREOF, each of the Parties has executed this Agreement as of the date first above written."
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      _____________________"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      [Legal Name of the Company]"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      _____________________"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      [Signature of Company Representative]"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      [Printed Name and Title]"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      AND"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      "
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      ____________________"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      [Legal Name of Freelancer]"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      _____________________"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      [Signature of Freelancer]"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": "      [Printed Name]"
                    }
                ]
            }
        ]
    },
    },
  ]
  