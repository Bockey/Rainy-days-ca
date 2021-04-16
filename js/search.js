<script type="text/javascript">
    document.getElementById('frmSearch').onsubmit = function() {
        window.location = 'http://www.google.com/search?q=site:127.0.0.1:5500' + document.getElementById('txtSearch').value;
        return false;
    }
</script>