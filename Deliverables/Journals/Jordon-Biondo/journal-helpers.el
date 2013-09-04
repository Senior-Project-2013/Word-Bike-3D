(defun journal/new-entry()
  (interactive)
  (org-table-goto-line 1337)
  (org-table-goto-column 1)
  (org-table-insert-row t)
  (org-table-insert-hline t)
  (insert (format-time-string "%m/%d/%Y"))
  (org-table-align)
  (org-table-next-field)
  (insert (format-time-string "%I:%M %p"))
  (org-table-next-field)
  (org-table-next-field)
  (org-table-next-field))
