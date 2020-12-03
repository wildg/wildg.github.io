var allPrecincts = [1,5,6,7,9,10,13,14,18,19,20,23,24,25,26,28,30,32,33,34,40,42,43,44,45,46,47,48,49,50,52,60,61,62,63,67,68,69,70,71,72,73,75,76,77,78,79,81,83,84,88,90,94,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,120,121,123]

var vals = [
  {
    "precinct": 78,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 78,
    "contact_reason": "Moving violation",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 78,
    "contact_reason": "Moving violation",
    "allegation": "Retaliatory summons",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "Other violation of VTL",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "Other violation of VTL",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 79,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "Moving violation",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "Moving violation",
    "allegation": "Seizure of property",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 13,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 13,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Gesture",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 13,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Race",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 13,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Sex Miscon (Sexual Harassment, Verbal)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 13,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Sex Miscon (Sexual Harassment, Gesture)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Other violation of VTL",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Other violation of VTL",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 79,
    "contact_reason": "Report of other crime",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 79,
    "contact_reason": "Report of other crime",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Execution of search warrant",
    "allegation": "Refusal to show search warrant",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 90,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 13,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 13,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 94,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 81,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 81,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 81,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 81,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 81,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 81,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Interference with recording",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 81,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 83,
    "contact_reason": "Report-dispute",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 83,
    "contact_reason": "Report-dispute",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 83,
    "contact_reason": "Moving violation",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 13,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 88,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 88,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 88,
    "contact_reason": "C/V requested info from officer",
    "allegation": "Threat of summons",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 88,
    "contact_reason": "C/V requested info from officer",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 90,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 90,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 88,
    "contact_reason": "Other",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 90,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 90,
    "contact_reason": "EDP aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "EDP aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Other violation of VTL",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 90,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 90,
    "contact_reason": "Parking violation",
    "allegation": "Question",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 90,
    "contact_reason": "Parking violation",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Parking violation",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "Parking violation",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "Parking violation",
    "allegation": "Vehicle search",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 90,
    "contact_reason": "Parking violation",
    "allegation": "Seizure of property",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "Parking violation",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "Report-possession/sale of narcotics",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Report-possession/sale of narcotics",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Report-possession/sale of narcotics",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Report-possession/sale of narcotics",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Other violation of VTL",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 90,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Moving violation",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Other violation of VTL",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 90,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Parking violation",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "Parking violation",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Parking violation",
    "allegation": "Frisk",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 90,
    "contact_reason": "Parking violation",
    "allegation": "Vehicle search",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 90,
    "contact_reason": "Parking violation",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Report-possession/sale of narcotics",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "Other violation of VTL",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 90,
    "contact_reason": "Other violation of VTL",
    "allegation": "Interference with recording",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Other violation of VTL",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 90,
    "contact_reason": "Execution of search warrant",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 90,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 90,
    "contact_reason": "Parking violation",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "Parking violation",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "Parking violation",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 94,
    "contact_reason": "CV already in custody",
    "allegation": "Electronic device information deletion",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 94,
    "contact_reason": "CV already in custody",
    "allegation": "Search of recording device",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 94,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 94,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 94,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 69,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 69,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 69,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Interference with recording",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 69,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 101,
    "contact_reason": "Other",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 101,
    "contact_reason": "Report-dispute",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 101,
    "contact_reason": "CV already in custody",
    "allegation": "Strip-searched",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 101,
    "contact_reason": "CV already in custody",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 102,
    "contact_reason": "Other",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 102,
    "contact_reason": "Other",
    "allegation": "Vehicle stop",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 102,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 102,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 102,
    "contact_reason": "Moving violation",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 102,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 13,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 103,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 103,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 103,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 103,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 103,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 103,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 103,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 103,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Interference with recording",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 103,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 103,
    "contact_reason": "Report of other crime",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 103,
    "contact_reason": "EDP aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 104,
    "contact_reason": "EDP aided case",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 104,
    "contact_reason": "EDP aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 105,
    "contact_reason": "Other",
    "allegation": "Entry of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 105,
    "contact_reason": "Other",
    "allegation": "Search of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 105,
    "contact_reason": "Other",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 102,
    "contact_reason": "Traffic accident",
    "allegation": "Other",
    "board_disposition": "Substantiated (Charges)"
  },
  {
    "precinct": 102,
    "contact_reason": "Traffic accident",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 105,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 105,
    "contact_reason": "Execution of search warrant",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 105,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 105,
    "contact_reason": "Execution of search warrant",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 101,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 101,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 105,
    "contact_reason": "C/V telephoned PCT",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 105,
    "contact_reason": "Other",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 105,
    "contact_reason": "Other",
    "allegation": "Search of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 105,
    "contact_reason": "Other",
    "allegation": "Entry of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 105,
    "contact_reason": "EDP aided case",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 105,
    "contact_reason": "EDP aided case",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 105,
    "contact_reason": "EDP aided case",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 105,
    "contact_reason": "EDP aided case",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 105,
    "contact_reason": "Other violation of VTL",
    "allegation": "Threat of summons",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 106,
    "contact_reason": "Aided case",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 106,
    "contact_reason": "Aided case",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 106,
    "contact_reason": "Aided case",
    "allegation": "Other",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 107,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 107,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Chokehold",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 107,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 107,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 107,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 107,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 107,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 108,
    "contact_reason": "Moving violation",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 108,
    "contact_reason": "Moving violation",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 110,
    "contact_reason": "Report of other crime",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 110,
    "contact_reason": "Report of other crime",
    "allegation": "Search of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 110,
    "contact_reason": "Report of other crime",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 110,
    "contact_reason": "Report of other crime",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 110,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 109,
    "contact_reason": "C/V at PCT to retrieve property",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 109,
    "contact_reason": "C/V at PCT to retrieve property",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 109,
    "contact_reason": "C/V at PCT to retrieve property",
    "allegation": "Seizure of property",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 109,
    "contact_reason": "C/V at PCT to retrieve property",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 111,
    "contact_reason": "Traffic accident",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 111,
    "contact_reason": "Traffic accident",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 111,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 112,
    "contact_reason": "Report-dispute",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 112,
    "contact_reason": "Traffic accident",
    "allegation": "Seizure of property",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 112,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 112,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 112,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 112,
    "contact_reason": "Report-dispute",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 112,
    "contact_reason": "Report-dispute",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 112,
    "contact_reason": "Report-dispute",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 112,
    "contact_reason": "Report-dispute",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 112,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 112,
    "contact_reason": "C/V telephoned PCT",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 71,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 71,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 71,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 71,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 113,
    "contact_reason": "Assist ACS or other agency",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 113,
    "contact_reason": "Assist ACS or other agency",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 113,
    "contact_reason": "Moving violation",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 113,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 113,
    "contact_reason": "Moving violation",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 113,
    "contact_reason": "Moving violation",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 113,
    "contact_reason": "Moving violation",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 113,
    "contact_reason": "Moving violation",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 113,
    "contact_reason": "Moving violation",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 113,
    "contact_reason": "Moving violation",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 113,
    "contact_reason": "Moving violation",
    "allegation": "Seizure of property",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 114,
    "contact_reason": "Report of other crime",
    "allegation": "Seizure of property",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 114,
    "contact_reason": "Report-dispute",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 114,
    "contact_reason": "Aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 114,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 114,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 114,
    "contact_reason": "Report of other crime",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 114,
    "contact_reason": "Report of other crime",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 114,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 114,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 19,
    "contact_reason": "Report of other crime",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 19,
    "contact_reason": "Report of other crime",
    "allegation": "Improper dissemination of medical info",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 19,
    "contact_reason": "Report of other crime",
    "allegation": "Improper dissemination of medical info",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 115,
    "contact_reason": "C/V at PCT to retrieve property",
    "allegation": "Action",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 112,
    "contact_reason": "Other",
    "allegation": "Sex Miscon (Sexual Harassment, Verbal)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 112,
    "contact_reason": "Other",
    "allegation": "Sex Miscon (Sexual Harassment, Gesture)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Threat of summons",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 115,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 115,
    "contact_reason": "EDP aided case",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 115,
    "contact_reason": "EDP aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 115,
    "contact_reason": "EDP aided case",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 115,
    "contact_reason": "EDP aided case",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 115,
    "contact_reason": "EDP aided case",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 120,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Search of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 120,
    "contact_reason": "Report-dispute",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 120,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 120,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 120,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 120,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 120,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 120,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 120,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 120,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 120,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 120,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 120,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 121,
    "contact_reason": "Moving violation",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 121,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Gun Pointed",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 121,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 121,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 121,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 121,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 121,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 120,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 121,
    "contact_reason": "EDP aided case",
    "allegation": "Physical force",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 121,
    "contact_reason": "EDP aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 121,
    "contact_reason": "EDP aided case",
    "allegation": "Physical force",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 121,
    "contact_reason": "Report of other crime",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 121,
    "contact_reason": "Report-dispute",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 121,
    "contact_reason": "Report-dispute",
    "allegation": "Physical force",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 121,
    "contact_reason": "Report-dispute",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 121,
    "contact_reason": "Report-dispute",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 121,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 121,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 121,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Gun Drawn",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 121,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 120,
    "contact_reason": "Report-dispute",
    "allegation": "Pepper spray",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 19,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Threat re: removal to hospital",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 19,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Race",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 19,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Other",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 123,
    "contact_reason": "Report of other crime",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 123,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Failed to Obtain Language Interpretation",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 14,
    "contact_reason": "Moving violation",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 14,
    "contact_reason": "Moving violation",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 14,
    "contact_reason": "Moving violation",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 14,
    "contact_reason": "Moving violation",
    "allegation": "Pepper spray",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 20,
    "contact_reason": "PD telephones CV",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 20,
    "contact_reason": "Report of other crime",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 20,
    "contact_reason": "Report-dispute",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 49,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 18,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 18,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 30,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 30,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 30,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "Other",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 20,
    "contact_reason": "Report of other crime",
    "allegation": "Refusal to obtain medical treatment",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 32,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 32,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Chokehold",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 32,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 18,
    "contact_reason": "Report-dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 18,
    "contact_reason": "Moving violation",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 18,
    "contact_reason": "Parking violation",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 18,
    "contact_reason": "Parking violation",
    "allegation": "Action",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 18,
    "contact_reason": "Parking violation",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 18,
    "contact_reason": "Parking violation",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 18,
    "contact_reason": "Parking violation",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 18,
    "contact_reason": "Parking violation",
    "allegation": "Gender",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 23,
    "contact_reason": "Aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": "Unknown",
    "contact_reason": "Other",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 23,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 23,
    "contact_reason": "Other violation of VTL",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 23,
    "contact_reason": "Other violation of VTL",
    "allegation": "Interference with recording",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 23,
    "contact_reason": "Other violation of VTL",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 23,
    "contact_reason": "Other violation of VTL",
    "allegation": "Gun Pointed",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 23,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 25,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 71,
    "contact_reason": "Other",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 71,
    "contact_reason": "Other",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 71,
    "contact_reason": "Other",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 71,
    "contact_reason": "Other",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 71,
    "contact_reason": "Other",
    "allegation": "Chokehold",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 71,
    "contact_reason": "Other",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Hit against inanimate object",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 50,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 50,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 50,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 50,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 120,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 120,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 120,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 88,
    "contact_reason": "Other",
    "allegation": "Sex Miscon (Sexual/Romantic Proposition)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 71,
    "contact_reason": "Execution of search warrant",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 71,
    "contact_reason": "Execution of search warrant",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 112,
    "contact_reason": "Traffic accident",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 112,
    "contact_reason": "Traffic accident",
    "allegation": "Gun Pointed",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 24,
    "contact_reason": "Moving violation",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 24,
    "contact_reason": "Moving violation",
    "allegation": "Other",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 24,
    "contact_reason": "Moving violation",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 24,
    "contact_reason": "Moving violation",
    "allegation": "Other",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 24,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 24,
    "contact_reason": "Report of other crime",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 114,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 114,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 114,
    "contact_reason": "Execution of search warrant",
    "allegation": "Property damaged",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 113,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 113,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 32,
    "contact_reason": "Assist ACS or other agency",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 32,
    "contact_reason": "Assist ACS or other agency",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 32,
    "contact_reason": "Assist ACS or other agency",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 32,
    "contact_reason": "Assist ACS or other agency",
    "allegation": "Gender",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 25,
    "contact_reason": "Aided case",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 25,
    "contact_reason": "Aided case",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 5,
    "contact_reason": "Report-dispute",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 5,
    "contact_reason": "Report-dispute",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 25,
    "contact_reason": "Aided case",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 25,
    "contact_reason": "Aided case",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 25,
    "contact_reason": "Aided case",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 115,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search of recording device",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 25,
    "contact_reason": "Aided case",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 25,
    "contact_reason": "Aided case",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 70,
    "contact_reason": "Aided case",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 70,
    "contact_reason": "Aided case",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 70,
    "contact_reason": "Aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 70,
    "contact_reason": "Aided case",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 25,
    "contact_reason": "EDP aided case",
    "allegation": "Search of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 25,
    "contact_reason": "EDP aided case",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 25,
    "contact_reason": "EDP aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 25,
    "contact_reason": "EDP aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 25,
    "contact_reason": "EDP aided case",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 48,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 34,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 34,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Seizure of property",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 34,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 34,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Interference with recording",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 34,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 34,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 34,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 25,
    "contact_reason": "EDP aided case",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 25,
    "contact_reason": "EDP aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 79,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 79,
    "contact_reason": "Parking violation",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 120,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 120,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 52,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Search of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Entry of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 34,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Threat to damage/seize property",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 34,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 34,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 34,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Property damaged",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 25,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 25,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 25,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 25,
    "contact_reason": "Aided case",
    "allegation": "Seizure of property",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 70,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 70,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Entry of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 70,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Entry of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 70,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 70,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 70,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Search of Premises",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 68,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 71,
    "contact_reason": "Execution of search warrant",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Refusal to obtain medical treatment",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Refusal to show search warrant",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Property damaged",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Property damaged",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 71,
    "contact_reason": "Execution of search warrant",
    "allegation": "Other",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 71,
    "contact_reason": "Execution of search warrant",
    "allegation": "Other",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 71,
    "contact_reason": "Execution of search warrant",
    "allegation": "Other",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 71,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 71,
    "contact_reason": "Execution of search warrant",
    "allegation": "Other",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 71,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "Assist ACS or other agency",
    "allegation": "Entry of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "Assist ACS or other agency",
    "allegation": "Search of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 25,
    "contact_reason": "Report of other crime",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 25,
    "contact_reason": "Report of other crime",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 25,
    "contact_reason": "Report of other crime",
    "allegation": "Refusal to obtain medical treatment",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "Execution of search warrant",
    "allegation": "Refusal to show search warrant",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Report-dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Report-dispute",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 75,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 25,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 25,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 25,
    "contact_reason": "Aided case",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 25,
    "contact_reason": "Aided case",
    "allegation": "Seizure of property",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 25,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Nonlethal restraining device",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Other",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Other",
    "allegation": "Entry of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Other",
    "allegation": "Threat to damage/seize property",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Other",
    "allegation": "Search of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Interference with recording",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 47,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other",
    "allegation": "Search of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 63,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 63,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 26,
    "contact_reason": "CV already in custody",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "Report of other crime",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "Report of other crime",
    "allegation": "Chokehold",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "Report of other crime",
    "allegation": "Search of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "Report of other crime",
    "allegation": "Restricted Breathing",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "Report of other crime",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Report of other crime",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "Report of other crime",
    "allegation": "Search of Premises",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 1,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 1,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 1,
    "contact_reason": "Demonstration/protest",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 1,
    "contact_reason": "Demonstration/protest",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 26,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 26,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 9,
    "contact_reason": "Report of other crime",
    "allegation": "Ethnicity",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 9,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 9,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 26,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 26,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 114,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Refusal to show arrest warrant",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 28,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Gender",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 30,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 18,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 18,
    "contact_reason": "Report-dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 18,
    "contact_reason": "Report-dispute",
    "allegation": "Sexual orientation",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 18,
    "contact_reason": "Report-dispute",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 18,
    "contact_reason": "Report-dispute",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 18,
    "contact_reason": "Report-dispute",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 18,
    "contact_reason": "Report-dispute",
    "allegation": "Other",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 18,
    "contact_reason": "Report-dispute",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 18,
    "contact_reason": "Report-dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 18,
    "contact_reason": "Moving violation",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 18,
    "contact_reason": "Report-dispute",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 18,
    "contact_reason": "Report-dispute",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 14,
    "contact_reason": "Report-dispute",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 14,
    "contact_reason": "Report-dispute",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 14,
    "contact_reason": "Report-dispute",
    "allegation": "Physical force",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 14,
    "contact_reason": "Report-dispute",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 14,
    "contact_reason": "Report-dispute",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 14,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Ethnicity",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 14,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 14,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 28,
    "contact_reason": "Other violation of VTL",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 14,
    "contact_reason": "Report-dispute",
    "allegation": "Search (of person)",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 14,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Questioned immigration status",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Execution of search warrant",
    "allegation": "Refusal to show search warrant",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Execution of search warrant",
    "allegation": "Threat to notify ACS",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Execution of search warrant",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Execution of search warrant",
    "allegation": "Threat to notify ACS",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Execution of search warrant",
    "allegation": "Refusal to show search warrant",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 81,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 81,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Gun Pointed",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 81,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Execution of search warrant",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 72,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 72,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 72,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 72,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Execution of search warrant",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 42,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Execution of search warrant",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Restricted Breathing",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 32,
    "contact_reason": "Execution of search warrant",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 23,
    "contact_reason": "Execution of search warrant",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 23,
    "contact_reason": "Execution of search warrant",
    "allegation": "Gun Pointed",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 109,
    "contact_reason": "Report of other crime",
    "allegation": "Physical force",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 109,
    "contact_reason": "Report of other crime",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 109,
    "contact_reason": "Report of other crime",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 109,
    "contact_reason": "Report of other crime",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 104,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 104,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 104,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 104,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 104,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 104,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 104,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 104,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 109,
    "contact_reason": "Report of other crime",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 109,
    "contact_reason": "Report of other crime",
    "allegation": "Other",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 109,
    "contact_reason": "Report of other crime",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 109,
    "contact_reason": "Report of other crime",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 109,
    "contact_reason": "Report of other crime",
    "allegation": "Physical force",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 104,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 104,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 104,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 104,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 104,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Property damaged",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 114,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 104,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 104,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 109,
    "contact_reason": "Report of other crime",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 109,
    "contact_reason": "Report of other crime",
    "allegation": "Other",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 109,
    "contact_reason": "Report of other crime",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 109,
    "contact_reason": "Report of other crime",
    "allegation": "Strip-searched",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 113,
    "contact_reason": "Execution of search warrant",
    "allegation": "Refusal to show search warrant",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 113,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 113,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 102,
    "contact_reason": "Traffic accident",
    "allegation": "Vehicle",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 102,
    "contact_reason": "Traffic accident",
    "allegation": "Vehicle",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 102,
    "contact_reason": "Traffic accident",
    "allegation": "Vehicle",
    "board_disposition": "Substantiated (Charges)"
  },
  {
    "precinct": 105,
    "contact_reason": "Execution of search warrant",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 105,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 105,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 105,
    "contact_reason": "Execution of search warrant",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 102,
    "contact_reason": "Execution of search warrant",
    "allegation": "Refusal to show search warrant",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 113,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 113,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 103,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 103,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 113,
    "contact_reason": "Execution of search warrant",
    "allegation": "Action",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 113,
    "contact_reason": "Execution of search warrant",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 113,
    "contact_reason": "Execution of search warrant",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 113,
    "contact_reason": "Execution of search warrant",
    "allegation": "Gender",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 113,
    "contact_reason": "Execution of search warrant",
    "allegation": "Refusal to show search warrant",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 121,
    "contact_reason": "Moving violation",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 121,
    "contact_reason": "Moving violation",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 123,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 123,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 123,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 121,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 121,
    "contact_reason": "Moving violation",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 121,
    "contact_reason": "Moving violation",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 121,
    "contact_reason": "Moving violation",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 121,
    "contact_reason": "Moving violation",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 123,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 84,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 28,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Other",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 28,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 50,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 50,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 50,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 52,
    "contact_reason": "Aided case",
    "allegation": "Search of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 52,
    "contact_reason": "Aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 52,
    "contact_reason": "Aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 49,
    "contact_reason": "Report-dispute",
    "allegation": "Property damaged",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 49,
    "contact_reason": "Report-dispute",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 49,
    "contact_reason": "Report-dispute",
    "allegation": "Search of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Race",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 71,
    "contact_reason": "EDP aided case",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 71,
    "contact_reason": "EDP aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 71,
    "contact_reason": "EDP aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "Report-dispute",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "Report-dispute",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "Report-dispute",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "Report-dispute",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "Report-dispute",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V at PCT to file complaint of crime",
    "allegation": "Nonlethal restraining device",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 1,
    "contact_reason": "Moving violation",
    "allegation": "Search (of person)",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 1,
    "contact_reason": "Moving violation",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 1,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 1,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 5,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Handcuffs too tight",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 5,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 5,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 5,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Other",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 30,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 30,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 5,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 101,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 60,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Strip-searched",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 60,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Strip-searched",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 60,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 61,
    "contact_reason": "Report-dispute",
    "allegation": "Handcuffs too tight",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Moving violation",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 75,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 73,
    "contact_reason": "Moving violation",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Moving violation",
    "allegation": "Seizure of property",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Moving violation",
    "allegation": "Strip-searched",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Parking violation",
    "allegation": "Photography/Videography",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Race",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Gender",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Failed to Obtain Language Interpretation",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 79,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Pepper spray",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Interference with recording",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Action",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Pepper spray",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Pepper spray",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Pepper spray",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 90,
    "contact_reason": "Moving violation",
    "allegation": "Interference with recording",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 90,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Gesture",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 7,
    "contact_reason": "Aided case",
    "allegation": "Interference with recording",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 7,
    "contact_reason": "Aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 7,
    "contact_reason": "Aided case",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 7,
    "contact_reason": "Aided case",
    "allegation": "Threat re: removal to hospital",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 32,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 32,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 7,
    "contact_reason": "CV already in custody",
    "allegation": "Action",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 42,
    "contact_reason": "Other violation of VTL",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "Unknown",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 40,
    "contact_reason": "Unknown",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 42,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 42,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 42,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Other violation of VTL",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Other violation of VTL",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Other violation of VTL",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Other violation of VTL",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Threat to damage/seize property",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Other violation of VTL",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Question",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 112,
    "contact_reason": "C/V at PCT to file complaint of crime",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 112,
    "contact_reason": "C/V at PCT to file complaint of crime",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 112,
    "contact_reason": "C/V at PCT to file complaint of crime",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 112,
    "contact_reason": "C/V at PCT to file complaint of crime",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 106,
    "contact_reason": "C/V at PCT to retrieve property",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 106,
    "contact_reason": "Aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 33,
    "contact_reason": "Parking violation",
    "allegation": "Interference with recording",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 33,
    "contact_reason": "Parking violation",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 33,
    "contact_reason": "Parking violation",
    "allegation": "Threat of summons",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 33,
    "contact_reason": "Parking violation",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 33,
    "contact_reason": "Parking violation",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 34,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 120,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 34,
    "contact_reason": "Other",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 34,
    "contact_reason": "Other",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 34,
    "contact_reason": "Other",
    "allegation": "Physical disability",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Property damaged",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Gun Pointed",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Other",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Action",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 73,
    "contact_reason": "Moving violation",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Moving violation",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Moving violation",
    "allegation": "Action",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 73,
    "contact_reason": "Moving violation",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Moving violation",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 79,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 120,
    "contact_reason": "EDP aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 42,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 44,
    "contact_reason": "Parking violation",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "Parking violation",
    "allegation": "Seizure of property",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 44,
    "contact_reason": "Parking violation",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "Parking violation",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "Parking violation",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 42,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 42,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "Parking violation",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 70,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 70,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Physical disability",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 70,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 52,
    "contact_reason": "Aided case",
    "allegation": "Search of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 52,
    "contact_reason": "Aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 52,
    "contact_reason": "Aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 34,
    "contact_reason": "EDP aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 34,
    "contact_reason": "EDP aided case",
    "allegation": "Search of recording device",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 34,
    "contact_reason": "EDP aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 34,
    "contact_reason": "EDP aided case",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 63,
    "contact_reason": "C/V at PCT to file complaint of crime",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 63,
    "contact_reason": "C/V at PCT to file complaint of crime",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 120,
    "contact_reason": "Moving violation",
    "allegation": "Question",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 120,
    "contact_reason": "Moving violation",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 120,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Nonlethal restraining device",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 120,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 120,
    "contact_reason": "Moving violation",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 120,
    "contact_reason": "Moving violation",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 120,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 34,
    "contact_reason": "Regulatory inspection",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 34,
    "contact_reason": "Regulatory inspection",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 34,
    "contact_reason": "Other",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 34,
    "contact_reason": "Other",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 34,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Radio as club",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 34,
    "contact_reason": "Moving violation",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 30,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 30,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 30,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 30,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 25,
    "contact_reason": "Report-dispute",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 25,
    "contact_reason": "Report-dispute",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 34,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 18,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 18,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 34,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 14,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Action",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 14,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Action",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 40,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 33,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 33,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 33,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Action",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 26,
    "contact_reason": "C/V requested info from officer",
    "allegation": "Gesture",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 26,
    "contact_reason": "C/V requested info from officer",
    "allegation": "Gesture",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 26,
    "contact_reason": "C/V requested info from officer",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 26,
    "contact_reason": "C/V requested info from officer",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 40,
    "contact_reason": "C/V at PCT to file complaint of crime",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 40,
    "contact_reason": "C/V at PCT to file complaint of crime",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 13,
    "contact_reason": "Other",
    "allegation": "Question",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 13,
    "contact_reason": "Other",
    "allegation": "Vehicle stop",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 13,
    "contact_reason": "Other",
    "allegation": "Threat of summons",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 13,
    "contact_reason": "Other",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 52,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Interference with recording",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 40,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Nonlethal restraining device",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Physical force",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Nonlethal restraining device",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 110,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 110,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Refusal to obtain medical treatment",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 60,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "CV already in custody",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "CV already in custody",
    "allegation": "Hit against inanimate object",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "Moving violation",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "Moving violation",
    "allegation": "Search (of person)",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 60,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 60,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 60,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 60,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 14,
    "contact_reason": "C/V telephoned PCT",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 14,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Search (of person)",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 14,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 40,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 40,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 14,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 14,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 94,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Report of other crime",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "Report of other crime",
    "allegation": "Body Cavity Searches",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "Report of other crime",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 52,
    "contact_reason": "PD suspected C/V of violation/crime - subway",
    "allegation": "Retaliatory summons",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 69,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 69,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 69,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 69,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 69,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 120,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 120,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 120,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 32,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 32,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 75,
    "contact_reason": "Other",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 63,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Property damaged",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 7,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 7,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 63,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Property damaged",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Action",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 73,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Execution of arrest/bench warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 112,
    "contact_reason": "Report-dispute",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 6,
    "contact_reason": "Aided case",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 42,
    "contact_reason": "Other violation of VTL",
    "allegation": "Threat of summons",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Other violation of VTL",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Other violation of VTL",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Other violation of VTL",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Other violation of VTL",
    "allegation": "Threat of summons",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "Other",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 42,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 42,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 42,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 42,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 42,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 42,
    "contact_reason": "Report of other crime",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Report of other crime",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Report of other crime",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 42,
    "contact_reason": "Report-dispute",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 42,
    "contact_reason": "C/V at PCT to file complaint of crime",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 42,
    "contact_reason": "Report of other crime",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 42,
    "contact_reason": "Report of other crime",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 6,
    "contact_reason": "Aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 6,
    "contact_reason": "Aided case",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 43,
    "contact_reason": "C/V at PCT to file complaint of crime",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "Other",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "Other",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 43,
    "contact_reason": "Other",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "Other",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Restricted Breathing",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 43,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V telephoned PCT",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V telephoned PCT",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V telephoned PCT",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V telephoned PCT",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Seizure of property",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V telephoned PCT",
    "allegation": "Search of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 44,
    "contact_reason": "EDP aided case",
    "allegation": "Gender",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "EDP aided case",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "EDP aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "EDP aided case",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 44,
    "contact_reason": "EDP aided case",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V telephoned PCT",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 44,
    "contact_reason": "Unknown",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "EDP aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Sex Miscon (Sexual Harassment, Verbal)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 44,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle search",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Refusal to obtain medical treatment",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Refusal to obtain medical treatment",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Refusal to obtain medical treatment",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Restricted Breathing",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Strip-searched",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Sex Miscon (Sexual Harassment, Verbal)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Action",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Other",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 40,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 44,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Other",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 45,
    "contact_reason": "EDP aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 45,
    "contact_reason": "Moving violation",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 45,
    "contact_reason": "Moving violation",
    "allegation": "Seizure of property",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 46,
    "contact_reason": "Moving violation",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 19,
    "contact_reason": "Report-dispute",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 19,
    "contact_reason": "Report-dispute",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 19,
    "contact_reason": "Report-dispute",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 19,
    "contact_reason": "Report-dispute",
    "allegation": "Action",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 19,
    "contact_reason": "Report-dispute",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Property damaged",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 46,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 46,
    "contact_reason": "Moving violation",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "Moving violation",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "Moving violation",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "Moving violation",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "C/V at PCT to retrieve property",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "C/V at PCT to retrieve property",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "C/V at PCT to retrieve property",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "C/V at PCT to retrieve property",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 46,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 46,
    "contact_reason": "Report-dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 46,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle search",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 46,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle search",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 46,
    "contact_reason": "Moving violation",
    "allegation": "Retaliatory summons",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 46,
    "contact_reason": "Moving violation",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Gender Identity",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 47,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 47,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Sexual Misconduct (Sexual Humiliation)",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 47,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Entry of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 47,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Entry of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "Parking violation",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 47,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 47,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 47,
    "contact_reason": "Report of other crime",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Question",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Question",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Question",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Report of other crime",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Report of other crime",
    "allegation": "Threat re: removal to hospital",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 47,
    "contact_reason": "Moving violation",
    "allegation": "Threat re: removal to hospital",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 47,
    "contact_reason": "Moving violation",
    "allegation": "Nonlethal restraining device",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Moving violation",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 47,
    "contact_reason": "Moving violation",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "Moving violation",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Handcuffs too tight",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 47,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Seizure of property",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Property damaged",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 47,
    "contact_reason": "Other violation of VTL",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "C/V at PCT to file complaint of crime",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Search of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Sexual orientation",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of summons",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of summons",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Sexual orientation",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Sexual Misconduct (Sexual Humiliation)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Search of recording device",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Race",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Action",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Race",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Gesture",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Threat re: removal to hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Threat to notify ACS",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Report of other crime",
    "allegation": "Race",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Report of other crime",
    "allegation": "Threat to damage/seize property",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Photography/Videography",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 48,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 7,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 7,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 7,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 7,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 7,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 7,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Retaliatory summons",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Interference with recording",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 48,
    "contact_reason": "Report of other crime",
    "allegation": "Other",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 48,
    "contact_reason": "Report of other crime",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 48,
    "contact_reason": "Report of other crime",
    "allegation": "Other",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 48,
    "contact_reason": "Report-dispute",
    "allegation": "Threat re: removal to hospital",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 49,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 49,
    "contact_reason": "Report-dispute",
    "allegation": "Physical force",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 49,
    "contact_reason": "Report-dispute",
    "allegation": "Other",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 49,
    "contact_reason": "Report-dispute",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 49,
    "contact_reason": "Report-dispute",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 49,
    "contact_reason": "Report-dispute",
    "allegation": "Threat re: removal to hospital",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 49,
    "contact_reason": "Report-dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 50,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 50,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 50,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 50,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 50,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 50,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 50,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 50,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Photography/Videography",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 50,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Photography/Videography",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 50,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 50,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 50,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 50,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Action",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 50,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 46,
    "contact_reason": "C/V at PCT to retrieve property",
    "allegation": "Refusal to obtain medical treatment",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 18,
    "contact_reason": "Parade/special event",
    "allegation": "Other",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 18,
    "contact_reason": "Parade/special event",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "Other",
    "allegation": "Search of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "Other",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "C/V at PCT to file complaint of crime",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "C/V at PCT to file complaint of crime",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "C/V at PCT to file complaint of crime",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "Unknown",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 52,
    "contact_reason": "Unknown",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 52,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 7,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Retaliatory summons",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 7,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 52,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": "Unknown",
    "contact_reason": "PD telephones CV",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": "Unknown",
    "contact_reason": "PD telephones CV",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "Aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 52,
    "contact_reason": "Aided case",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 52,
    "contact_reason": "Aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 52,
    "contact_reason": "Aided case",
    "allegation": "Physical force",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 52,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Chokehold",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Gun Drawn",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 44,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Restricted Breathing",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "Report-dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 52,
    "contact_reason": "Report-dispute",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Question",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 7,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 52,
    "contact_reason": "Unknown",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 52,
    "contact_reason": "Unknown",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 52,
    "contact_reason": "Unknown",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 60,
    "contact_reason": "Unknown",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "Unknown",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "Unknown",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "Unknown",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "Unknown",
    "allegation": "Other",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "Other",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "Other",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "Other",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 60,
    "contact_reason": "Other",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "Moving violation",
    "allegation": "Refusal to obtain medical treatment",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "Moving violation",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 60,
    "contact_reason": "Moving violation",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 60,
    "contact_reason": "Moving violation",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 60,
    "contact_reason": "Execution of search warrant",
    "allegation": "Handcuffs too tight",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 61,
    "contact_reason": "Moving violation",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 61,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 61,
    "contact_reason": "Moving violation",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 25,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 25,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 25,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 25,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Other",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 18,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 61,
    "contact_reason": "Moving violation",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 61,
    "contact_reason": "No contact",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 62,
    "contact_reason": "C/V requested info from officer",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 62,
    "contact_reason": "C/V requested info from officer",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 72,
    "contact_reason": "Report of other crime",
    "allegation": "Physical force",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 62,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 62,
    "contact_reason": "EDP aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 62,
    "contact_reason": "EDP aided case",
    "allegation": "Other",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 62,
    "contact_reason": "EDP aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 62,
    "contact_reason": "EDP aided case",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 62,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 62,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 62,
    "contact_reason": "Report-gun possession/shots fired",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 62,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 62,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Threat re: removal to hospital",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 62,
    "contact_reason": "EDP aided case",
    "allegation": "Other",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 62,
    "contact_reason": "EDP aided case",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 62,
    "contact_reason": "EDP aided case",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 62,
    "contact_reason": "EDP aided case",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 63,
    "contact_reason": "Report-dispute",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 63,
    "contact_reason": "Report-dispute",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 9,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 13,
    "contact_reason": "Other",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 13,
    "contact_reason": "Other",
    "allegation": "Retaliatory summons",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 9,
    "contact_reason": "Other violation of VTL",
    "allegation": "Retaliatory summons",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 9,
    "contact_reason": "Other violation of VTL",
    "allegation": "Retaliatory summons",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 9,
    "contact_reason": "Other violation of VTL",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "Aided case",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 67,
    "contact_reason": "Other",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "Other",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "Other",
    "allegation": "Entry of Premises",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "Other",
    "allegation": "Seizure of property",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "Report of other crime",
    "allegation": "Search of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 67,
    "contact_reason": "Report of other crime",
    "allegation": "Seizure of property",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "Other",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "Other",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "Report of other crime",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 67,
    "contact_reason": "Aided case",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 67,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 67,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "EDP aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 67,
    "contact_reason": "EDP aided case",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 67,
    "contact_reason": "EDP aided case",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 67,
    "contact_reason": "EDP aided case",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 67,
    "contact_reason": "Report-dispute",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 67,
    "contact_reason": "Report-dispute",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "Report-dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "Report-dispute",
    "allegation": "Threat re: removal to hospital",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "Report of other crime",
    "allegation": "Photography/Videography",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 9,
    "contact_reason": "Moving violation",
    "allegation": "Gender Identity",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 9,
    "contact_reason": "Moving violation",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 9,
    "contact_reason": "Moving violation",
    "allegation": "Property damaged",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 9,
    "contact_reason": "Moving violation",
    "allegation": "Action",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 9,
    "contact_reason": "Moving violation",
    "allegation": "Interference with recording",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 9,
    "contact_reason": "Moving violation",
    "allegation": "Gender Identity",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 9,
    "contact_reason": "Moving violation",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 68,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 68,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 68,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 68,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 68,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 68,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Interference with recording",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Photography/Videography",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 63,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Word",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 63,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 63,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 63,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Search (of person)",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 63,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 63,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 63,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 63,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 63,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 63,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 63,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 63,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 63,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 63,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 69,
    "contact_reason": "Report-dispute",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 81,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "Parking violation",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "Parking violation",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "Parking violation",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "Parking violation",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "Parking violation",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "Parking violation",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "Parking violation",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 69,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 70,
    "contact_reason": "Report of other crime",
    "allegation": "Sex Miscon (Sexual Harassment, Verbal)",
    "board_disposition": "Substantiated (Charges)"
  },
  {
    "precinct": 70,
    "contact_reason": "Moving violation",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 70,
    "contact_reason": "Moving violation",
    "allegation": "Threat to damage/seize property",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 70,
    "contact_reason": "Moving violation",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 70,
    "contact_reason": "Moving violation",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 70,
    "contact_reason": "Moving violation",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 70,
    "contact_reason": "Moving violation",
    "allegation": "Threat to damage/seize property",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 70,
    "contact_reason": "Moving violation",
    "allegation": "Other",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 70,
    "contact_reason": "Moving violation",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 70,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 70,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 70,
    "contact_reason": "Moving violation",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 70,
    "contact_reason": "Report of other crime",
    "allegation": "Threat of summons",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 70,
    "contact_reason": "Report of other crime",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 70,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 70,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Seizure of property",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 70,
    "contact_reason": "Report of other crime",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 70,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 70,
    "contact_reason": "Aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 70,
    "contact_reason": "Other violation of VTL",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 70,
    "contact_reason": "Other violation of VTL",
    "allegation": "Action",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 70,
    "contact_reason": "Report of other crime",
    "allegation": "Photography/Videography",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 1,
    "contact_reason": "Parking violation",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 1,
    "contact_reason": "Parking violation",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 1,
    "contact_reason": "Parking violation",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 71,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 71,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 9,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 9,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 9,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 71,
    "contact_reason": "Moving violation",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 71,
    "contact_reason": "Moving violation",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 71,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 71,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 71,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 10,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Nonlethal restraining device",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 71,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 71,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 71,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 71,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 71,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 71,
    "contact_reason": "PD suspected C/V of violation/crime - bldg",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 60,
    "contact_reason": "CV already in custody",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "CV already in custody",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "CV already in custody",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 60,
    "contact_reason": "CV already in custody",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 72,
    "contact_reason": "Execution of search warrant",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 72,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 72,
    "contact_reason": "Moving violation",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 72,
    "contact_reason": "Execution of search warrant",
    "allegation": "Threat to damage/seize property",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 72,
    "contact_reason": "Execution of search warrant",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 72,
    "contact_reason": "Execution of search warrant",
    "allegation": "Search of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 72,
    "contact_reason": "Execution of search warrant",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 73,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Seizure of property",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Aided case",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 73,
    "contact_reason": "Aided case",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 73,
    "contact_reason": "Aided case",
    "allegation": "Restricted Breathing",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "Aided case",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 73,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Word",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 75,
    "contact_reason": "Moving violation",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Moving violation",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Moving violation",
    "allegation": "Action",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Moving violation",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Moving violation",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 73,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Other violation of VTL",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Interference with recording",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 73,
    "contact_reason": "Other violation of VTL",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "EDP aided case",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "EDP aided case",
    "allegation": "Nonlethal restraining device",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "EDP aided case",
    "allegation": "Nonlethal restraining device",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "EDP aided case",
    "allegation": "Nonlethal restraining device",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "EDP aided case",
    "allegation": "Nightstick as club (incl asp & baton)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "EDP aided case",
    "allegation": "Nonlethal restraining device",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "EDP aided case",
    "allegation": "Nonlethal restraining device",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "EDP aided case",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 67,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 73,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Gun Drawn",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Report-dispute",
    "allegation": "Search of Premises",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 75,
    "contact_reason": "Report-dispute",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 75,
    "contact_reason": "Report-dispute",
    "allegation": "Forcible Removal to Hospital",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Other",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Seizure of property",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Threat re: removal to hospital",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Threat of arrest",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Interference with recording",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search of recording device",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Other",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 75,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Moving violation",
    "allegation": "Threat of summons",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "C/V intervened on behalf of/observed encounter w/3rd party",
    "allegation": "Stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Moving violation",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Question",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Moving violation",
    "allegation": "Vehicle stop",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 75,
    "contact_reason": "Moving violation",
    "allegation": "Interference with recording",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 75,
    "contact_reason": "Moving violation",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 76,
    "contact_reason": "Other violation of VTL",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 76,
    "contact_reason": "Other violation of VTL",
    "allegation": "Frisk",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 76,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle search",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 76,
    "contact_reason": "Other violation of VTL",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 76,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 76,
    "contact_reason": "Other violation of VTL",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 76,
    "contact_reason": "Other violation of VTL",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 76,
    "contact_reason": "Other violation of VTL",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 76,
    "contact_reason": "Other violation of VTL",
    "allegation": "Vehicle stop",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Ethnicity",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "Parking violation",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 77,
    "contact_reason": "Parking violation",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 77,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Question",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Entry of Premises",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Seizure of property",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Action",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Search (of person)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Vehicle search",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - auto",
    "allegation": "Demeanor/tone",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "Assist ACS or other agency",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "Assist ACS or other agency",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "Assist ACS or other agency",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "Assist ACS or other agency",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "Assist ACS or other agency",
    "allegation": "Physical force",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "Report-dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "Parking violation",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "Parking violation",
    "allegation": "Word",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "Parking violation",
    "allegation": "Physical force",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "Parking violation",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "Report-dispute",
    "allegation": "Property damaged",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 77,
    "contact_reason": "Moving violation",
    "allegation": "Frisk",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 77,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Word",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 77,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Entry of Premises",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 77,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Seizure of property",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 77,
    "contact_reason": "Report-noise/disturbance",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Frisk",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "PD suspected C/V of violation/crime - street",
    "allegation": "Stop",
    "board_disposition": "Substantiated (Command Discipline B)"
  },
  {
    "precinct": 77,
    "contact_reason": "Moving violation",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 77,
    "contact_reason": "Moving violation",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "Moving violation",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "Moving violation",
    "allegation": "Threat of force (verbal or physical)",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 77,
    "contact_reason": "Report-dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 77,
    "contact_reason": "Report-dispute",
    "allegation": "Property damaged",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 77,
    "contact_reason": "Moving violation",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 78,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 78,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 78,
    "contact_reason": "C/V at PCT to obtain information",
    "allegation": "Refusal to process civilian complaint",
    "board_disposition": "Substantiated (Formalized Training)"
  },
  {
    "precinct": 78,
    "contact_reason": "Other violation of VTL",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 78,
    "contact_reason": "Other violation of VTL",
    "allegation": "Retaliatory summons",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 78,
    "contact_reason": "Other violation of VTL",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Command Discipline A)"
  },
  {
    "precinct": 78,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Refusal to provide name",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 78,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 78,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Frisk",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 78,
    "contact_reason": "C/V requested investigation of crime",
    "allegation": "Search (of person)",
    "board_disposition": "Unsubstantiated"
  },
  {
    "precinct": 78,
    "contact_reason": "Other violation of VTL",
    "allegation": "Refusal to provide shield number",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 78,
    "contact_reason": "Other violation of VTL",
    "allegation": "Refusal to provide name",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 78,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Failure to provide RTKA card",
    "board_disposition": "Substantiated (Command Lvl Instructions)"
  },
  {
    "precinct": 78,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Threat of summons",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 78,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Threat of arrest",
    "board_disposition": "Exonerated"
  },
  {
    "precinct": 78,
    "contact_reason": "Report-domestic dispute",
    "allegation": "Property damaged",
    "board_disposition": "Exonerated"
  }
]