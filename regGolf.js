Item 1: ca[rt] matches either "car" or "cat".
Item 2: pr?op matches either "pop" or "prop".
Item 3: ferr(et|y|ari) matches "ferret", "ferry", or "ferrari".
Item 4: \b\w*ious\b matches any word ending in "ious".
Item 5: \s[.,:;] matches a whitespace character followed by a period, comma, colon, or semicolon.
Item 6: \b\w{7,}\b matches any word longer than six letters.
Item 7: \b[^\We]+\b matches any word without the letter "e" (or "E").