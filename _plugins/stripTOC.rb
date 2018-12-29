require 'nokogiri'

module Jekyll
  module StripTocFilter

    def strip_toc(raw)
      doc = Nokogiri::HTML.fragment(raw.encode('UTF-8', :invalid => :replace, :undef => :replace, :replace => ''))

      for block in ['div'] do
        doc.css(block).each do |ele|
          ele.remove if (ele['id'] == 'post-table-of-contents')
        end
      end

      for block in ['svg'] do
        doc.css(block).each do |ele|
          ele.remove if (ele['class'] == 'star__rating')
        end
      end

      doc.inner_html

    end
  end
end

Liquid::Template.register_filter(Jekyll::StripTocFilter)
