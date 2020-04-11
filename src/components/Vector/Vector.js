import React from 'react';
import PropTypes from 'prop-types';

const Vector = ({ type, className }) => {
  switch (type) {
    case 'logo':
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
        >
          <g fillRule="evenodd">
            <path
              fill="#f3e3db"
              d="M184.667 84.152c-13.032 5.646-72.144 31.144-113.834 49.101-7.883 3.395-14.67 6.327-15.083 6.514l-.75.34v124.814l4.25 1.836c2.337 1.009 15.05 6.484 28.25 12.167 13.2 5.682 37.2 16.025 53.333 22.985 16.134 6.959 36.06 15.55 44.281 19.09l14.947 6.437 12.22-5.261c6.72-2.894 25.719-11.082 42.219-18.197 16.5-7.115 43.575-18.783 60.167-25.929l30.166-12.993V139.941l-46-19.821c-25.3-10.901-57.823-24.913-72.274-31.137s-26.451-11.303-26.667-11.287c-.216.015-7.067 2.921-15.225 6.456m42.761 10.516c14.889 6.417 46.347 19.964 69.905 30.103l42.834 18.436v118.586l-42.834 18.436c-23.558 10.14-55.005 23.686-69.883 30.103C212.573 316.75 200.242 322 200.048 322c-.194 0-7.671-3.162-16.617-7.027-38.039-16.436-99.204-42.789-110.848-47.759L60 261.843V143.152l12.583-5.369c11.981-5.111 80.49-34.639 112.084-48.308 8.158-3.53 15.025-6.431 15.261-6.446.235-.016 12.61 5.222 27.5 11.639m-54.836 40.863c-5.911 1.818-6.627 10.608-1.096 13.451 2.042 1.049 5.052 1.146 6.802.218l1.132-.601 5.479 5.479 5.479 5.479-.999 1.576c-2.003 3.158-2.291 8.216-.656 11.52l.836 1.688-4.773 3.827-4.773 3.828-1.199-.814c-6.05-4.106-13.616 3.087-10.283 9.775 4.029 8.085 16.813 2.25 13.33-6.084l-.462-1.106 4.184-3.3c5.951-4.695 5.34-4.435 7.161-3.045 2.831 2.161 6.25 2.866 10.314 2.126l1.567-.286 1.754 3.526 1.754 3.527-.867.926c-4.587 4.901-1.401 12.562 5.224 12.562 4.288 0 7.305-3.016 7.305-7.303 0-4.384-3.019-7.319-7.511-7.304l-2.207.007-1.73-3.479-1.731-3.48 1.649-1.539c.922-.86 2.099-2.437 2.67-3.577l1.02-2.039 2.76.551 2.761.552.241 1.414c1.521 8.91 14.638 7.932 14.599-1.088-.033-7.632-10.35-10.24-13.836-3.498l-.467.903-2.262-.47c-3.542-.736-3.321-.543-3.5-3.046-.255-3.567-2.088-6.736-5.197-8.989l-1.306-.946 1.345-3.407c1.163-2.949 1.43-3.38 1.987-3.203 6.873 2.181 11.206-9.4 5.043-13.482-7.498-4.966-15.729 5.547-9.09 11.61l1.069.977-1.3 3.337c-1.245 3.194-1.336 3.327-2.14 3.105-2.842-.782-8.655.463-10.059 2.156-.329.396-1.35-.475-5.969-5.088l-5.572-5.565.623-1.372c2.684-5.911-2.805-11.946-9.103-10.009M45 202.5V265h5V140h-5v62.5m305 0V265h5V140h-5v62.5m-211.167 19.123c-10.638 2.79-11.766 21.932-1.508 25.611 1.103.395 1.944 1.067 3.128 2.498 3.045 3.681 8.081 4.417 10.469 1.53 1.182-1.428-.042-1.867-2.121-.762-2.427 1.291-3.535 1.135-5.542-.78l-1.691-1.614 2.032-.4c10.577-2.081 12.057-20.926 1.992-25.368-1.726-.761-5.186-1.127-6.759-.715m6.084 2.335c7.929 4.045 7.072 19.519-1.214 21.928-8.36 2.43-14.522-8.045-10.238-17.403 2.141-4.677 7.221-6.684 11.452-4.525m51.848 6.253c-8.25 2.532-8.021 14.946.32 17.286 8.063 2.263 14.576-5.079 11.274-12.708-1.742-4.023-6.841-6.036-11.594-4.578m27.936.179c-.624.427-1.391 1.263-1.707 1.857l-.574 1.08-.184-1.37c-.253-1.892-.473-2.018-2.755-1.58-3.3.634-3.984 2.242-.772 1.815l1.624-.215V246h-1.48c-1.607 0-2.141.418-1.508 1.181 1.036 1.248 8.618.441 7.831-.833-.119-.191-.806-.348-1.529-.348h-1.314v-5.281c0-5.967.479-7.585 2.615-8.833 2.954-1.725 3.719.03 3.719 8.54 0 7.544-.095 7.323 3.054 7.174 2.934-.139 3.515-1.6.636-1.6h-1.69v-5.281c0-6.151.462-7.615 2.784-8.82 2.977-1.545 3.549-.188 3.549 8.415 0 7.67-.098 7.435 3.054 7.286 2.809-.133 3.232-1.361.529-1.535l-1.583-.102-.002-5.898c-.002-6.463-.24-7.883-1.54-9.182-1.8-1.801-4.864-1.21-6.296 1.215-.564.955-.638.987-.97.413-1.536-2.657-3.567-3.442-5.491-2.121m31.694-.203c-9.228 2.484-8.858 15.08.511 17.392 3.504.865 8.631-.387 9.973-2.436 1.085-1.655-.159-1.918-2.388-.505-4.782 3.033-10.705 1.619-12.313-2.939-1.015-2.877-1.464-2.699 6.814-2.699h7.326l.538-.821c.457-.697.481-1.087.16-2.583-1.012-4.721-5.218-6.863-10.621-5.409m-94.562.261c-3.09.714-3.448 2.13-.449 1.775l1.616-.192.002 5.401c.002 6.251.254 7.472 1.83 8.856 2.696 2.366 7.255 2.137 10.188-.512l1.313-1.187v1.139c0 1.672.454 1.949 2.806 1.715 3.867-.384 4.672-1.776 1.028-1.776H178v-7.834c0-8.9.336-8.115-3.167-7.389-2.847.59-3.299 2.116-.529 1.788l1.696-.201v10.878l-.917.928c-2.633 2.665-7.074 3.133-9.117.961-.777-.827-.804-1.038-.966-7.741-.189-7.83.041-7.35-3.167-6.609m40.274 1.243c6.499 1.804 6.372 12.564-.168 14.325-4.761 1.282-8.939-2.075-8.939-7.183 0-5.236 4.176-8.511 9.107-7.142m60.893.58c.977.705 2.333 3.205 2.333 4.3v.762h-13.62l.274-.953c1.194-4.163 7.619-6.561 11.013-4.109"
            />
            <path
              fill="#acccbc"
              d="M340.163 202.5c0 32.633.039 45.934.087 29.557.048-16.377.048-43.077 0-59.333-.048-16.257-.087-2.857-.087 29.776m-187.752 32.167c0 .641.068.904.152.583.084-.321.084-.846 0-1.167-.084-.321-.152-.058-.152.584"
            />
            <path
              fill="#44a49c"
              d="M0 200v200h400V0H0v200M232.833 91.512c17.784 7.661 50.334 21.683 72.334 31.16l40 17.23v125.192l-46.334 19.965c-25.483 10.981-58.133 25.047-72.556 31.259l-26.223 11.294-14.944-6.44c-8.219-3.542-30.468-13.135-49.443-21.319-18.975-8.183-44.885-19.336-57.577-24.783l-23.077-9.903.002-62.667.002-62.667 13.908-5.961C87.56 125.886 166.439 91.88 185 83.832c8.158-3.538 14.983-6.391 15.167-6.341.183.05 14.883 6.36 32.666 14.021M184.5 89.718c-18.655 8.092-94.155 40.637-111.667 48.136l-12.666 5.424v118.444l12.666 5.424c14.258 6.106 79.467 34.199 108.274 46.646l18.941 8.184 26.226-11.313c14.424-6.223 45.876-19.772 69.893-30.109l43.666-18.796V143.235l-6-2.577c-12.61-5.417-81.82-35.218-106.835-46.002-14.392-6.204-26.392-11.35-26.666-11.435-.274-.084-7.399 2.839-15.832 6.497m-6.573 45.8c3.835 1.601 5.725 6.562 3.917 10.278l-.63 1.296 5.384 5.286 5.384 5.286 2.259-1.249c2.187-1.208 2.371-1.249 5.75-1.284l3.49-.035 1.224-3.02 1.224-3.019-.995-.945c-6.084-5.779.285-15.814 7.993-12.594 7.458 3.115 5.213 14.482-2.86 14.482h-1.621l-1.271 3.21c-1.182 2.986-1.229 3.233-.677 3.542 3.251 1.819 6.169 6.925 6.169 10.794 0 1.03.073 1.089 1.79 1.445 3.225.67 3.332.646 4.578-.991 4.398-5.78 13.412-2.756 13.412 4.5 0 9.288-13.234 10.247-14.953 1.084-.22-1.169-.304-1.233-2.111-1.595-1.036-.208-2.209-.454-2.608-.547-.611-.142-.871.129-1.652 1.724-.535 1.093-1.652 2.555-2.645 3.462l-1.718 1.571 1.719 3.425 1.718 3.425 2.318.059c9.911.252 9.94 14.873.03 14.889-6.75.011-10.126-8.113-5.355-12.884l.797-.797-1.743-3.508c-1.509-3.035-1.834-3.479-2.411-3.296-3.536 1.124-8.335.259-11.354-2.046l-1.499-1.143-4.24 3.388c-2.332 1.863-4.423 3.554-4.646 3.756-.318.289-.293.694.114 1.868 2.974 8.573-9.74 13.579-13.966 5.498-3.306-6.32 3.824-13.274 10.266-10.012.897.454 1.778.701 1.973.554.194-.146 2.25-1.784 4.569-3.64l4.217-3.375-.791-1.957c-1.587-3.928-1.298-7.96.816-11.379l.942-1.524-5.438-5.387-5.438-5.387-1.249.637c-4.726 2.409-10.556-1.381-10.556-6.863 0-5.415 5.41-9.056 10.374-6.982M50 202.5V265h-5V140h5v62.5m305 0V265h-5V140h5v62.5m-209.676 19.524c10.526 4.775 9.383 23.542-1.572 25.801l-1.749.36 1.003 1.217c1.572 1.907 2.874 2.172 5.306 1.081 2.899-1.301 4.494-.045 1.938 1.526-3.539 2.175-6.264 1.642-9.538-1.863-1.274-1.364-2.486-2.479-2.694-2.479-1.696 0-5.116-3.06-6.438-5.759-5.462-11.155 3.716-24.433 13.744-19.884m-6.837 1.664c-7.723 2.246-8.203 18.176-.654 21.679 6.279 2.913 12.297-2.244 12.294-10.534-.004-8.225-5.054-13.06-11.64-11.145m26.371 6.423c.094.245.208 3.282.255 6.75.091 6.893.342 7.965 2.044 8.741 1.482.675 3.876.483 5.776-.465 2.963-1.476 3.067-1.74 3.067-7.813v-5.253l-1.37.308c-1.432.322-2.297-.017-2.297-.9 0-.614.289-.743 2.876-1.286 3.276-.686 3.124-1.068 3.124 7.851v7.629l1.917-.087c1.84-.083 1.917-.053 1.917.738 0 1.76-5.451 1.859-5.95.109l-.304-1.067-1.123.856c-3.356 2.56-8.752 2.326-10.718-.464-1.065-1.512-1.195-2.34-1.248-7.925l-.05-5.333h-1.432c-3.117 0-2.659-1.568.67-2.296 2.798-.611 2.649-.606 2.846-.093m39.309.344c3.58 1.681 4.995 4.053 4.995 8.378 0 6.896-6.106 11.039-12.792 8.68-7.613-2.686-7.731-14.553-.173-17.322 2.145-.786 6.005-.658 7.97.264m24.427-.268c.409.286.971.96 1.249 1.498l.505.978 1.436-1.498c1.917-2.001 3.967-2.148 5.705-.409 1.474 1.473 1.844 3.432 1.844 9.741v5.131l1.417.103c1.262.091 1.417.194 1.417.936 0 .814-.056.833-2.5.833h-2.5l-.167-7.015c-.187-7.863-.435-8.818-2.296-8.818-2.829 0-3.704 2.043-3.704 8.65v5.35h1.293c1.396 0 2.24.665 1.916 1.51-.161.419-.692.499-2.787.42l-2.589-.097-.166-7.015c-.187-7.863-.436-8.818-2.296-8.818-2.799 0-3.704 2.156-3.704 8.822v5.178l.916.005c1.229.007 1.842.441 1.695 1.201-.11.572-.47.627-4.116.627h-3.995v-.833c0-.758.143-.843 1.583-.935l1.583-.102V232.071l-1.389.312c-1.683.378-2.277.192-2.277-.714 0-.874 1.247-1.365 3.666-1.443l1.834-.059.202 1.333c.112.733.224 1.151.25.928.234-2.004 4.194-3.489 5.975-2.241m33.765-.14c2.87.86 4.953 3.663 4.967 6.684.012 2.526-.235 2.602-8.4 2.602H252v.812c0 5.356 7.661 7.721 13.008 4.016 1.481-1.026 2.325-.909 2.325.324 0 2.559-7.199 4.395-11.627 2.965-11.716-3.784-5.157-20.941 6.653-17.403m-65.702 2.37c-4.693 2.371-4.693 10.462 0 12.833 6.45 3.259 12.558-3.598 9.119-10.238-1.664-3.214-5.65-4.348-9.119-2.595m58.825.077c-1.696.851-2.935 2.312-3.33 3.923l-.224.916h13.458l-.234-1.083c-.936-4.34-5.204-5.997-9.67-3.756"
            />
            <path
              fill="#7cbcac"
              d="M344.833 202.5c0 34.523.113 62.7.25 62.615.138-.085.25-28.262.25-62.615s-.112-62.53-.25-62.615c-.137-.085-.25 28.092-.25 62.615M178.143 238c0 4.308.048 6.071.106 3.917.058-2.155.058-5.68 0-7.834s-.106-.391-.106 3.917m60.92 2.064c-.035 3.06.049 5.633.187 5.719.137.085.211-1.593.163-3.731-.155-6.933-.286-7.673-.35-1.988m-16.577.575c.012 4.278.098 5.162.514 5.276.36.098.386.055.093-.154-.281-.199-.441-1.834-.515-5.275l-.106-4.986.014 5.139m8.333 0c.012 4.278.098 5.162.514 5.276.361.098.387.055.093-.154-.281-.199-.44-1.834-.514-5.275l-.107-4.986.014 5.139m-24.068-1.806c.003.734.072.994.151.58.08-.415.077-1.015-.006-1.334-.084-.318-.149.021-.145.754M145.75 253.23c.321.084.846.084 1.167 0 .32-.084.058-.153-.584-.153-.641 0-.904.069-.583.153"
            />
          </g>
        </svg>
      );

    case 'logo-small':
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 51.18 14.31"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M1.08.1a1.64 1.64 0 00-.25 3 1.82 1.82 0 001.51 0l.25-.1L3.8 4.2 5 5.41l-.22.35a2.83 2.83 0 00-.14 2.55l.18.37-1.06.85-1 .84-.27-.18a1.62 1.62 0 10.68.82L3 10.76 4 10c1.32-1 1.18-1 1.58-.67a2.78 2.78 0 002.28.47l.35-.06.39.78.39.78-.19.2a1.62 1.62 0 001.15 2.78 1.62 1.62 0 10-.05-3.23h-.48L9 10.31l-.38-.77L9 9.2a3.54 3.54 0 00.59-.79L9.78 8l.61.12.61.08.06.32a1.62 1.62 0 10.16-1l-.1.2-.5-.1c-.78-.16-.73-.12-.77-.67a2.68 2.68 0 00-1.15-2l-.29-.21.3-.74c.25-.66.31-.75.44-.71 1.52.48 2.47-2.08 1.11-3a1.63 1.63 0 00-2 2.56l.24.22-.29.74c-.27.7-.3.73-.47.68A3 3 0 005.5 5c-.07.09-.3-.1-1.32-1.12L3 2.61l.14-.3a1.62 1.62 0 00-2-2.21"
          />
          <path
            fill="#fff"
            d="M21.89 10.76A.42.42 0 0122 11c0 .11-.09.22-.26.32a.5.5 0 01-.29.11.34.34 0 01-.28-.19l-.53-.82a3 3 0 01-1 .16 2.91 2.91 0 01-1.64-.46 3 3 0 01-1.08-1.26A4.52 4.52 0 0116.54 7a4.54 4.54 0 01.38-1.9A3.07 3.07 0 0118 3.8a3 3 0 011.61-.44 3 3 0 011.62.44 3 3 0 011.07 1.27A4.39 4.39 0 0122.68 7a4.52 4.52 0 01-.33 1.78 3 3 0 01-1 1.25zm-4.18-2.34a2.13 2.13 0 00.76.95 2 2 0 001.14.33 2.12 2.12 0 00.52-.06l-.62-1a.53.53 0 01-.08-.23c0-.11.08-.22.25-.33A.59.59 0 0120 8a.35.35 0 01.28.2l.67 1a2.18 2.18 0 00.64-.93A3.75 3.75 0 0021.78 7a3.81 3.81 0 00-.26-1.46 2.23 2.23 0 00-.76-1 2.15 2.15 0 00-2.29 0 2.16 2.16 0 00-.76 1A3.81 3.81 0 0017.45 7a3.79 3.79 0 00.26 1.42zM29.13 5.06a.37.37 0 01.09.29v4.77a.44.44 0 01-.08.29.45.45 0 01-.32.09.45.45 0 01-.32-.09.39.39 0 01-.09-.29v-1a3.25 3.25 0 01-1 1 2.22 2.22 0 01-1.24.4 1.8 1.8 0 01-1.37-.51 1.93 1.93 0 01-.49-1.4V5.35a.34.34 0 01.1-.29.47.47 0 01.31-.06.47.47 0 01.33.09.34.34 0 01.1.29v3.19a1.25 1.25 0 00.26.83 1 1 0 00.81.3 1.76 1.76 0 001-.32 2.55 2.55 0 00.8-.86 2.39 2.39 0 00.31-1.2v-2a.37.37 0 01.1-.29.51.51 0 01.35-.03.51.51 0 01.35.06zM35.44 5.26a2.58 2.58 0 011 1 2.86 2.86 0 01.37 1.46 2.89 2.89 0 01-.37 1.47 2.65 2.65 0 01-1 1 3 3 0 01-2.87 0 2.65 2.65 0 01-1-1 2.89 2.89 0 01-.37-1.47 2.86 2.86 0 01.37-1.46 2.58 2.58 0 011-1 3 3 0 012.87 0zM33 6a1.74 1.74 0 00-.67.7 2.31 2.31 0 000 2.05 1.71 1.71 0 00.67.69 2.15 2.15 0 002 0 1.71 1.71 0 00.67-.69 2.31 2.31 0 000-2A1.74 1.74 0 0035 6a2.15 2.15 0 00-2 0zM43.51 5.07a1.22 1.22 0 01.43.53 2 2 0 01.16.87v3.65a.35.35 0 01-.1.29.47.47 0 01-.33.09.5.5 0 01-.34-.09.35.35 0 01-.1-.29V6.57a1.07 1.07 0 00-.13-.6.46.46 0 00-.42-.21.67.67 0 00-.51.26 1.9 1.9 0 00-.38.71 3.63 3.63 0 00-.13 1v2.36a.39.39 0 01-.1.29.51.51 0 01-.34.09.51.51 0 01-.34-.09.39.39 0 01-.09-.29V6.57a1.06 1.06 0 00-.14-.6.44.44 0 00-.42-.21.71.71 0 00-.53.24 1.76 1.76 0 00-.37.71 3.61 3.61 0 00-.14 1v2.36a.35.35 0 01-.1.29.47.47 0 01-.33.09.48.48 0 01-.34-.09.35.35 0 01-.1-.29V5.35a.42.42 0 01.08-.29.38.38 0 01.3-.09.32.32 0 01.37.38V6a2.11 2.11 0 01.61-.83 1.17 1.17 0 01.76-.28 1 1 0 01.7.27 1.45 1.45 0 01.4.79c.35-.71.8-1.06 1.35-1.06a1.2 1.2 0 01.62.18zM49.9 5.24a2.31 2.31 0 01.91 1 3.26 3.26 0 01.37 1.4.34.34 0 01-.08.28.46.46 0 01-.29.08h-4.24a1.89 1.89 0 00.49 1.32 1.71 1.71 0 001.27.45 5.55 5.55 0 001.15-.13 3.84 3.84 0 001-.37.38.38 0 01.18-.06.27.27 0 01.2.09.62.62 0 01.15.24.52.52 0 010 .21.39.39 0 01-.26.36 5.07 5.07 0 01-1.12.37 6.31 6.31 0 01-1.3.14 2.85 2.85 0 01-1.45-.34 2.2 2.2 0 01-.9-1 3.38 3.38 0 01-.31-1.52A3 3 0 0146 6.25a2.51 2.51 0 011-1 3 3 0 011.44-.35 2.88 2.88 0 011.46.34zm-2.65.87a1.69 1.69 0 00-.62 1h3.6a1.62 1.62 0 00-.57-1 1.93 1.93 0 00-1.21-.35 1.9 1.9 0 00-1.2.35z"
          />
        </svg>
      );

    case 'clipboard':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-clipboard"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="2" />
        </svg>
      );

    default:
      return null;
  }
};

Vector.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

Vector.defaultProps = {
  className: '',
};

export default Vector;
