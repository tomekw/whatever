##
# Requires: Bootstrap3, jQuery 1.9+, underscore 1.4+
#
# Open a confirmation dialog with 2 buttons (ok, cancel) and a question, and an optional title
#
# use: $modal = X.dialog({body: "Are you sure?", primary: "OK", secondary: "Cancel", title: null}, function(primaryClicked){
#                 var $button = this; // 'this' is the jquery obj of the button that was clicked
#                 return true; // doing this will keep the dialog open after their action. So don't do it.
#               }); //the function returns the modal that was just shown so that you can modify it
#
# arguments (square brackets around type means that it is optional):
#   opts = [object]
#     body       = [string] (default: 'Are you sure?' ) - the body text of the dialog
#     primary    = [string] (default: 'OK' )            - the primary action button text
#     secondary  = [string] (default: 'Cancel' )        - the dismiss action button text
#     title      = [string] (default: 'HourlyNerd' )    - title of the dialog
#     clazz      = [string] (default: '')               - modal dialog class, use 'modal-lg' or 'modal-sm'
#     closeIsPrimary = [string] (default: false)    - what should the value of the param passed to the callback be when the dialog is closed? by default, false is passed
#   cb  = [function] - called when user takes an action
#                      has one boolean param, indicating if the primary action button was clicked or not
#                      context: this = $(button clicked)
#         return boolean - return true from this function if you need to keep the dialog open
# returns
#    $modal - jquery object containing the modal dialog just opened
# events
#    all buttons in the dialog have a namespaced click event bound, to unbind call $modal.off('dialog.click')
#
# Author: mkoryak - license: MIT
##
window.X = window.X or {}
X.dialog = ( ->
  tpl = _.template("""
  <div class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog <%= clazz %>">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button " class="close action-close"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
          <h4 class="modal-title"><%= title %></h4>
        </div>
        <div class="modal-body">
          <p><%= body %></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default action-secondary"><%= secondary %></button>
          <button type="button" class="btn btn-primary action-primary"><%= primary %></button>
        </div>
      </div>
    </div>
  </div>
  """)
  return (opts, cb) ->
    if arguments.length == 1
      cb = opts
      opts = {}

    opts = _.extend(
      body: "Are you sure?"
      primary: "OK"
      secondary: "Cancel"
      title: 'HourlyNerd'
      clazz: ''
      closeIsPrimary: false
    , opts)


    cb = cb or ->
    $modal = $(tpl(opts))
    $('body').append($modal)

    ignoreHide = false
    event = _.debounce(($btn, primaryAction) ->
      keepOpen = cb.apply($btn, [primaryAction])
      if not keepOpen
        ignoreHide = true
        $modal.modal('hide')
        ignoreHide = false

    , 100)
    $modal.on('click.dialog', 'button', (e) ->
      $btn = $(this)
      primaryAction = null
      if $btn.hasClass('action-primary')
        primaryAction = true
      else if $btn.hasClass('action-secondary')
        primaryAction = false
      else if $btn.hasClass('action-close')
        primaryAction = opts.closeIsPrimary
      return event(e, primaryAction)
    )
    $modal.on('hide.bs.modal', (e) ->
      if not ignoreHide
        event(null, opts.closeIsPrimary)
    )
    $modal.modal('show')
    return $modal
)()